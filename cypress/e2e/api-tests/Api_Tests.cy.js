import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from "../../support/api-utils";

describe("Booking", () => {
  let testDataFileName = "api_data.json";
  let authToken;
  let createResponse;
  let jsonObject;

  it("Create Token", () => {
    cy.fixture(testDataFileName).then((testData) => {
      postRequest(
        testData.apiBaseUrl + testData.data.auth.endpoint,
        testData.data.auth.body
      ).then((response) => {
        // Assert response status code, body, etc.
        authToken = response.body.token;

        cy.log(response.body);
      });
    });
  });

  it("Booking - GetBookingIds", () => {
    cy.fixture(testDataFileName).then((testData) => {
      getRequest(testData.apiBaseUrl + testData.data.booking.endpoint).then(
        (response) => {
          // Assert response status code, body, etc.
          cy.log(response.body);
        }
      );
    });
  });

  it("Booking - CreateBooking", () => {
    cy.fixture(testDataFileName).then((testData) => {
      postRequest(
        testData.apiBaseUrl + testData.data.booking.endpoint,
        testData.data.booking.body
      ).then((response) => {
        // Assert response status code, body, etc.
        expect(response.status).to.eq(200);
        createResponse = JSON.stringify(response.body);
        jsonObject = JSON.parse(createResponse);
        cy.log("The created response", createResponse);
        expect(jsonObject.booking.firstname).to.eq(testData.data.booking.body.firstname);
      });
    });
  });

  it("Booking - GetBooking", () => {
    cy.fixture(testDataFileName).then((testData) => {
      getRequest(
        testData.apiBaseUrl +
          testData.data.booking.endpoint +
          "/" +
          jsonObject.bookingid
      ).then((response) => {
        let getBookingResponse = JSON.stringify(response.body);
        cy.log("Get Booking Response: ", getBookingResponse);
        // Assert response status code, body, etc.
        expect(response.status).to.eq(200);
        expect(JSON.parse(getBookingResponse).firstname).to.eq(testData.data.booking.body.firstname);

      });
    });
  });

  it("Booking - UpdateBooking", () => {
    cy.fixture(testDataFileName).then((testData) => {
      let headers = testData.data.headers;
      // // Update the value of the "token" in the "Cookie" header
      headers.Cookie = "token=" + authToken;
      // // Stringify the object back to JSON format
      let updatedHeaderString = JSON.stringify(headers);
      let UpdatedHeaders = JSON.parse(updatedHeaderString);
      putRequest(
        testData.apiBaseUrl +
          testData.data.booking.endpoint +
          "/" +
          jsonObject.bookingid,
        testData.data.updatebooking.body,
        UpdatedHeaders
      ).then((response) => {
        // Assert response status code, body, etc.
        expect(response.status).to.eq(200);
        let updatedResponse = JSON.stringify(response.body);
        cy.log("Updated Respones data : ", updatedResponse);
        expect(JSON.parse(updatedResponse).firstname).to.eq(testData.data.updatebooking.body.firstname);

      });
    });
  });

  it("Booking- Update Booking Partially", () => {
    cy.fixture(testDataFileName).then((testData) => {
      let headers = testData.data.headers;
      // Update the value of the "token" in the "Cookie" header
      headers.Cookie = "token=" + authToken;
      // Stringify the object back to JSON format
      let updatedHeaderString = JSON.stringify(headers);
      let UpdatedHeaders = JSON.parse(updatedHeaderString);
      patchRequest(
        testData.apiBaseUrl +
          testData.data.booking.endpoint +
          "/" +
          jsonObject.bookingid,
        testData.data.partialUpdatebooking.body,
        UpdatedHeaders
      ).then((response) => {
        // Assert response status code, body, etc.
        expect(response.status).to.eq(200);
        let updatedResponse = JSON.stringify(response.body);
        cy.log("Partially Updated Respones data : ", updatedResponse);
        expect(JSON.parse(updatedResponse).firstname).to.eq(testData.data.partialUpdatebooking.body.firstname);

      });
    });
  });

  it("Booking- Delete Booking", () => {
    cy.fixture(testDataFileName).then((testData) => {
      let headers = testData.data.headers;
      // Update the value of the "token" in the "Cookie" header
      headers.Cookie = "token=" + authToken;
      // Stringify the object back to JSON format
      let updatedHeaderString = JSON.stringify(headers);
      let UpdatedHeaders = JSON.parse(updatedHeaderString);
      deleteRequest(
        testData.apiBaseUrl +
          testData.data.booking.endpoint +
          "/" +
          jsonObject.bookingid,
        UpdatedHeaders
      ).then((response) => {
        // Assert response status code, body, etc.
        expect(response.status).to.eq(201);
        let deleteResponse = JSON.stringify(response.body);
        cy.log("The deleted response", deleteResponse);
        expect(JSON.parse(deleteResponse)).to.eq("Created");
      });
    });
  });
});
