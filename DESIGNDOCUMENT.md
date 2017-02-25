












JiffyTaxi Application
Software Design Document












Akash Srivastava and Anurag Srivastava

Date: (25/02/2017)





Table of Contents

1.	INTRODUCTION	3
1.1.	Purpose	3
1.2.	Scope	3
2. Solution
1. INTRODUCTION
1.1 Purpose

This software design document describes the architecture and system design of the JiffyTaxi Application and is intended to solve the conveyance problems so as to ensure that users have an overall smooth and painless experience.

1.2 Scope

The main objective for this project is to provide a mobile application, the JiffyTaxi Application, to our Client, on the Android platform, that will assist the riders and make the overall taxi ride a nice experience. The JiffyTaxi Application will empower riders to track their taxi and also it ensures that they are able to book a taxi which is in the nearest vicinity. To accomplish those goals the project will also include a central server that hosts the database, processes data requests, and has a graphical user interface to access the server/database directly.

2.	Solution

For locating the drivers nearest to the rider, we will be using google location matrices and find the drivers nearest to the rider. The location (latitude,longitude) of the rider and driver will be stored to the MongoDB database.

