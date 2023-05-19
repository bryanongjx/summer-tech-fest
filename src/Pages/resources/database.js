import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResourcesSidebar from '../../Components/ResourcesSideBar';

const Database = () => {
    return (
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="d-flex justify-content-start align-items-start h-100">
              <ResourcesSidebar />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 bg-white p-4 overflow-auto" style={{ height: 'calc(100vh - 64px)' }}>
            <h1 className="mt-4 mb-4">Database Storage </h1>
  
            <h3 className="header">Introduction</h3>
            <p>
                Backend database storage refers to the storage and management of data on the server-side of a web application or system. 
            </p>
            <p>
                It involves storing, retrieving, updating, and deleting data in a structured manner to support the functionality and requirements of the application.
            </p>

            <h3 className="header">Key points</h3>
            <ul>
                <li>
                    <p>
                        Purpose: The backend database is used to store the persistent data required by the application. 
                        It serves as a central repository where data can be securely stored and accessed by the application's backend logic. 
                        This data can include user information, product details, transaction records, settings, and more.
                    </p>
                </li>
                <li>
                    <p>
                    Relational and non-relational databases: There are different types of backend databases, including relational databases (such as MySQL, PostgreSQL, Oracle) and non-relational databases (such as MongoDB, Cassandra, Redis). 
                    Relational databases organize data into structured tables with predefined relationships, while non-relational databases store data in a more flexible, schema-less manner.
                    </p>
                </li>
                <li>
                    <p>
                    Data modeling and schema design: Before storing data in the database, it is essential to design an appropriate data model and schema. 
                    This involves defining the structure of the data, specifying relationships between entities, and establishing constraints and rules for data integrity. 
                    Proper data modeling ensures efficient storage, retrieval, and manipulation of data.
                    </p>
                </li>
                <li>
                    <p>
                    CRUD operations: Backend database storage supports the basic CRUD (Create, Read, Update, Delete) operations. The application can insert new records (Create), retrieve existing records (Read), modify records (Update), and remove records (Delete) as needed. These operations are performed using query languages (such as SQL for relational databases or document-based query languages for non-relational databases).
                    </p>
                </li>
                <li>
                    <p>
                        Scalability and availability: As the application grows, the backend database storage must be able to handle increased data volumes and concurrent requests. Techniques such as database sharding, replication, and clustering are employed to scale the database horizontally or vertically and ensure high availability and performance.
                    </p>
                </li>
            </ul>

            <h3 className="header">Resources</h3>
            <ul>
              <li>
                <a href="https://www.w3schools.com/mongodb/">MongoDB Guide</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=ofme2o29ngU">MongoDB Tutorial Video</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/sql/">SQL Guide</a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=7S_tz1z_5bA">SQL Tutorial Video</a>
              </li>
              <li>
                <a href="https://fireship.io/lessons/the-ultimate-beginners-guide-to-firebase/">Firebase Guide & Video</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Database;