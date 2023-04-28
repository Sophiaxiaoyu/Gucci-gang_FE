
# ONLINE MOBILE PHONE STORE by Gucci Gang

## Alternative Access for the code this project

* GitHub: 
    * Front-end: [Front-end of this project](https://github.com/Sophiaxiaoyu/Gucci-gang_FE)
    * Back-end: [Back-end of this project](https://github.com/Sophiaxiaoyu/Gucci-gang_BE)

* Glitch:
    * Front-end: [Front-end of this project]()
    * Back-end: [Back-end of this project](https://glitch.com/~gucci-gang-be)

## System overview

We have developed an online mobile phone store for our project. It is a full-stack e-commerce project built with Postgres, Express.js, React and Node.js. 

We are selling phones in 2 categories, Android phones and iPhones. A user can select from a list of available products, add items to cart and then place an order by entering delivery and payment details.  


The system is intended to be used by two types of users:

- **Customer:** The customer can sign up to create an account or login to their existing account. They can browse through the products and add them to cart. They can then review the cart, make changes, if any and purchase the desired product by making a payment. A customer can also view the orders they have placed earlier.
- **Admin:** The admin’s role is to update the inventor. They can add and remove products on sale and also update the number of available pieces of each product.

We have implemented role-based access to allow users access only to the parts they are intended to such as making orders and browsing shopping carts. 

## Assumptions

- The user has entered correct address and contact details
- The user has entered correct payment details. 
- All changes to the store are made by the admin and not the store.
- Salespeople aren’t able to edit products and orders. Only managers have the permissions.


## Database and Relational Schema
Figure 1. Database Schema Design Diagram
![](https://i.imgur.com/tVobyLP.png)


Note. Specific diagram can be visited through link [Schema link](https://dbdiagram.io/d/6366f199c9abfc61117087ff)![](Aspose.Words.d4b73db1-c129-4283-8cf6-83ea07035aed.001.png)

**List of Tables and attributes**

1. **Users:** This table stores information about every user of the platform, both customers and admins. 

    **Attributes:**

    - **User\_id:** Primary key. Identifies each unique user.
    - **Username:** Unique id to log into their accounts.
    - **Password**: Password for account.
    - **Email**
    - **Fullname**
    - **Roles:** Identifies roles as Customer or Admin.
    - **Address**
    - **City**
    - **State**
    - **Country**
    - **Created\_at:** Timestamp of when the account was created.
    - **Business:** Stores the business information of customers. We have made this an enum with categories set to Students, IT and Retail.

1. **Manager:** Information of the regional manager.

    **Attributes**:
    - **Manager\_id:** Primary key.
    - **Name**

1. **Region:** Information about the region in which stores are present.

    **Attributes:**

    - **Region\_id:** Primary key
    - **Name**
    - **Manager\_id:** Foregign key referring to the regional manager.

1. **Store:** Information about the store selling a product.

    **Attributes:**

    - **Store\_id:** Primary key
    - **Store\_name**
    - **Region\_id:** Foreign key referring to the region in which the store is present.

1. **Salesperson:** Information of the salesperson who made the sale.

    **Attributes:**

    - **Salesperson\_id:** Primary Key
    - **Name.**
    - **Store\_id:** Foreign key of the store where the salesperson works

1. **Products:** Information of the product listed on the online store.

    **Attributes:**

    - **Product\_id:** Primary Key
    - **Name**
    - **Price**
    - **Description**
    - **Image\_url**
    - **Category:** Enum for product category. Our store sells Android and iOS phones.
    - **Inventory:** Number of pieces of product in inventory.
    - **Store\_id:** Foreign key referring to the store selling the product.
1. **Reviews:** User review of products

    **Attributes:**

    - **Product\_id:** Foreign key referring to the product being reviewed.
    - **User\_id:** Foreign key of the user who wrote the review.
    - **Content**
    - **Rating**
    - **Date**
    - **(Product\_id, Use\_id) together act as a Primary key**

1. **Cart:** Stores information about products users added to cart but didn’t purchase yet. 

    **Attributes:**

    - **Id:** Primary key
    - **User\_id:** Foreign key of the user who added items to the cart.

1. **Cart\_item:** Products in a cart.

    **Attributes:**

    - **Id:** Primary key
    - **Cart\_id:** Foreign key of the cart.
    - **Product\_id:** Foreign key of the product in the cart.
    - **Quantity**



1. **Orders:** Information about a successfully placed order.

    **Attributes:**

    - **Order\_id:** Primary key.
    - **User\_id:** Foreign key of the user who placed the order.
    - **Status**
    - **Date**
    - **Amount**
    - **Total**
    - **Payment\_method**

1. **Order\_item:** Products in an order.

    **Attributes:**

    - **Id:** Primary Key
    - **Order\_id:** Foreign key referring to the order.
    - **Product\_id:** Foreign key of the product ordered.
    - **Quantity**

## Front-end and connection to Back-end

As an e-commerce website, the webpage has to be intuitive and easy to operate with. Hence, we decided to use React, Express.js, related UI frameworks, and libraries to build our website. Windmill can be a useful library for this purpose, since it is light and handy. Meanwhile, we use Tailwind-CSS to do more customization when we find it necessary. 

Specific Frontend Tech Stack set is:

- [React](https://reactjs.org/)
- [Windmill React UI](https://windmillui.com/react-ui)
- [Tailwind-CSS](https://tailwindcss.com/)
- [React-hot-toast](https://react-hot-toast.com/docs)
- [React-Spinners](https://www.npmjs.com/package/react-spinners)
- [React-helmet-async](https://www.npmjs.com/package/react-helmet-async)

## **Significant Front-end Features:**

**API Fetch Interceptor & ErrorHandle**

To enhance security, we create an interceptor of all requests, which means the API was created singleton and exposed to global components. 
![](https://i.imgur.com/KwVAiW8.png)


Token will be added at this time. Hence, no matter what page or what history you have, your login status can not be messed.

**RBAC (Role based access control) Model**

We integrate all authentication related APIs and create a class as “AuthService”. After verification, the login status will be stored as global context and shared around components. 

![](https://i.imgur.com/fYZ56bx.png)


useContext of React. States setting exposed through Provider.

**Notification Model**

To provide a more accurate feedback to users operations, a notification model is utterly necessary. We choose React-hot-toast as our notification model. By importing it at the top level of our page – App.jsx. We can send out notifications easily. 

![](https://i.imgur.com/iyY5QsP.png)

## Implementation

### Home page
![](https://i.imgur.com/2hhos0m.png)


On the home page, it displays all products that we stored in the database. The page lists out all the products that are selling currently in out store, and all has a button to add the product into the cart.


### User Login / Signup [hashed passwords storage]
![](https://i.imgur.com/c2KJXHI.png)



Our user Login/Signup page uses the AuthService model, and also has the function where it detects the user's input for the email. Username must be unique for each user which our system enforces.The passwords of each user is hashed before it is saved in the database for extra security.

![](https://i.imgur.com/seAgzt8.png)

In the sign up page, new user's can create a new account. To prevent the user from inputting the unexpected words, we did a double confirm design to make sure the password matches the same, before saving it into our database.

![](https://i.imgur.com/PFPGLY2.png)
![](https://i.imgur.com/xTO5RFx.png)

The shopping cart would temporarily store the products that is putted into the cart, and will be cleaned off when users are done with the shopping session.

When the user's are done with the shopping session, they can go and click on checkout to pay for the whole order.
Checkout and confirmation
![](https://i.imgur.com/xMeeJwq.png)
![](https://i.imgur.com/jO5T475.png)


### Inventory Management page
![](https://i.imgur.com/lcKFuBV.png)
Admins can go into this page and update the inventory. Each product has a limited number of pieces in stock. A user can not order more items than present in the inventory. Our system identifies when a user exceeds this limit and notifies them.
### Dashboard 
For the admin, we have a page that would show the sales of different stores and different areas.
![](https://i.imgur.com/hj9pLp3.png)
























<a name="_89s6hrvqt4cn"></a><a name="_slwmwjk6f85c"></a><a name="_ouy9dblwf41d"></a><a name="_u9jesjc0roui"></a><a name="_mb6uvvvw1uqe"></a><a name="_egc8ss49psuo"></a>Future improvements

Give store managers the ability to update products in their store.

Verify user email and number through verification links.

Verify payment details using a third party API.

Provide search bars to customers.

Add category filters to the home page.

## Team member’s contributions

#### Anjnesh Sharma(ans458):

Responsible for designing and implementing the DB database schema and related functionality. This involved creating the necessary collections and documents,
defining the relationships between them, and integrating them with the application's server-side logic.  

#### Pin-Jen Wang(piw19):

Responsible for designing and developing the user interface using HTML, CSS, and JavaScript. Also used frameworks React to build the application components. The webpage is a responsive and accesible website.

#### Xiaoyu Xia(xix90):

Responsible for developing the shopping cart functionality and implementing the necessary backend logic to support it. Also worked on implementing error handling and ensuring that the application was robust and reliable.

#### Xinyu Ran(xir16):

Responsible for managing the communication between the front-end and the back-end of the application using Axios. This also involved implementing the necessary APIs and ensuring that they were well-documented and easy to use.

## MVC Structure:

- Models: Our models were defined using MySQL to represent our data. And we created 11 tables, which we mentioned brfore.
- Views: Our views were built using React framework to create the user interface of our application.
- Controllers: Our controllers consisted of the server-side logic for handling HTTP requests and responses. We used Express.js to define our server routes and handlers. Our controllers also made use of the Mongoose models to interact with the database and retrieve or modify data. Finally, we used Axios to handle client-side requests and update our views dynamically.

Overall, our application followed the MVC (Model-View-Controller) pattern, where the models were responsible for representing the data, the views were responsible for presenting the data to the user,
and the controllers were responsible for handling user requests and updating the models and views accordingly. We used Express.js as our framework to connect these components together and
handle the overall flow of the application.

## Advanced Features
* We use a `token` to authenticate the user. Only authenticated users can use the relevant features of the site.
* We hash `encrypt` the user's password to make it more secure when it is stored in the database. This ensures the security of users throughout the site.
* We use `RESTful style API` for building web services that are lightweight, scalable, and easy to maintain. 
* Admin capabilities:We categorize and manage users' permissions. Ordinary users can only perform some general operations, such as buying products, browsing products, etc. But for the administrator users, they can add, delete, and check the products, and they can also view the data of the whole warehouse and analyze the sales situation of the whole products.
* We also validate and handle errors appropriately. For example, when a user logs in, an error in entering a password is indicated accordingly. Or when a user makes a successful payment, the site will also give a "payment successful" message.


## Challenges

We encountered some issues with one of the libraries we used for handling authentication. It had some compatibility issues with the version of our Node.js runtime environment. We had to look for an alternative solution that was compatible with our environment.

There were also some features we initially wanted to include, such as a search bar for products and wishlists. However, due to time constraints, we were not able to implement these features.

Overall, we faced some challenges while developing this application, but we were able to overcome them through teamwork and collaboration.

## Future Work

If we had more time, we would like to implement a feature that allows customers to save items to their wishlists. This would make it easier for them to keep track of items they are interested in purchasing and could also be used to generate recommendations for related products.

## Conclusion

In terms of web technologies and standards, this course has covered a broad range of topics, including HTML, CSS, JavaScript, jQuery, Node.js, Express, MongoDB, and more.
These are all important technologies that are widely used in modern web development, and I believe the course has provided a solid foundation for understanding how these technologies work together to create a web application.

However, web development is a constantly evolving field, and there are always new technologies and standards emerging. In future iterations of this course, it might be useful to cover some of the latest technologies and frameworks that are gaining popularity in the industry, such as React, Angular, Vue.js, GraphQL, and more.

Additionally, it might be beneficial to dive deeper into specific topics, such as responsive design, web accessibility, security, and performance optimization, as these are all important
considerations for building robust and user-friendly web applications.

Overall, I believe the course has provided a good introduction to web development technologies and standards, and there is always more to learn as the field continues to evolve.