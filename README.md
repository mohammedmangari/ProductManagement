
# Product Management API

A simple REST API for managing products using MongoDB, Spring Boot, and React.

## Prerequisites

- Java 8 or later
- MongoDB 4.2 or later
- Node.js 12 or later
- Maven 3.6 or later

## Installation

1. Clone the repository:
   git clone https://github.com/mohammedmangari/Product_Management.git
2. Start MongoDB on your local machine.
3. Create a new database in MongoDB and name it "databasename"
4. Inside the project directory, open the `application.properties` file and configure the MongoDB connection details
     spring.data.mongodb.uri=
     spring.data.mongodb.database = databasename
5. Run the command `mvn spring-boot:run` to start the Spring Boot application.
6. In another terminal, navigate to the `client` directory and run `npm install` to install the dependencies.
7. Run `npm start` to start the React development server.
8. The application should be running on `http://localhost:3000/`.

## API documentation
The API has the following endpoints:

<table>
  <tr><th>Method </th><th> Endpoint</th><th>  Description</th></tr>
  <tr><td> GET  </td><td>  /products </td>	<td>Retrieve a list of all products </td> </tr>
  <tr><td> GET  </td> 	<td>/products/category </td> <td>Retrieve a list of all products, filtered by category </td></tr>
  <tr><td> POST </td>  <td>/products </td> <td> Create a new product  </td>
  <tr><td> PUT  </td> <td>	/products </td>	<td>update an existing product  </td></tr>
  <tr> <td>DELETE</td> <td>/products/name/td> <td> delete an existing product </td></tr>
  </table>



## Product object
The product object has the following properties:
  - id (string)
  - name (string)
  - description (string)
  - price (number)
  - quantity (number)

## Usage
Use the React application to interact with the API and manage the products. The application allows you to view a list of products, add new products, update existing products, and delete products.





