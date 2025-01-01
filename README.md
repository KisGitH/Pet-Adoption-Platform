Pet Adoption Platform  

Description  
The Pet Adoption Platform is a web-based application designed to make pet adoption simple and accessible. The platform includes key features such as user authentication, a pet adoption catalog, collaboration opportunities, blog updates, and a Contact Us form that sends submitted details to the website owner's email address using Web3Forms.  

Pages  
- Login Page: Secure authentication for users.  
- Register Page: Enables new users to create accounts.  
- Home Page: Provides an overview of the platform’s mission and services.  
- Adopt Us: Displays available pets with filtering options.  
- Get Involved With Us: Details collaboration opportunities for users.  
- Blog: Offers blog posts about pet adoption and related initiatives.  
- Contact Us: Includes a form to send messages directly to the email address via Web3Forms.  

Key Challenge  
Implementing the Contact Us form's email functionality using Web3Forms was a major feature, ensuring the submitted details are sent securely and reliably to the email address.  

Features  
- Fully responsive design with Tailwind CSS for mobile and other devices.  
- Authentication system for secure user access.  
- Dynamic pet catalog with filtering capabilities.  
- Blog section to share updates and insights about pet adoption.  
- Collaboration and communication opportunities.  
- Email functionality for the Contact Us form using Web3Forms.  

Technologies Used  
- Frontend: React, Tailwind CSS  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Hosting: Render.com (Live Link: https://pet-adoption-platform-ueh7.onrender.com/)  

Team  
- KISHOREKUMAR S
- MANIKANDAN S 

License  
This project is currently not licensed. The design and functionality were implemented based on a template provided by Crystal Delta Company.  

Setup Instructions  

Prerequisites  
Ensure the following are installed on your system:  
- Node.js  
- MongoDB  

Steps  

1. Clone the repository:   git clone https://github.com/KisGitH/Pet-Adoption-Platform  

2. Navigate to the project directory:   cd Pet-Adoption-Platform

3. Add environment variables:

   Create a .env file in the root directory and add the following configuration:
   
      MONGO_URI=<Your_MongoDB_Connection_URL>  
      PORT=5000
    
    Replace <Your_MongoDB_Connection_URL> with your actual MongoDB connection string.

6. Install dependencies for both frontend and backend:   "npm run build"

7. Configure Web3Forms for the Contact Us form:
    Go to Web3Forms.
    Create your account and obtain the API key.
    Add the API key in the relevant section of the Contact Us form component.

8. Run the application:   "npm run start" 
   This will start both the frontend and backend.

9. Access the application locally: 
   
   Open your browser and navigate to:   http://localhost:5000.

Live Hosting

   The application is hosted on Render.com and can be accessed at:   https://pet-adoption-platform-ueh7.onrender.com/

Note:

   The live server on Render.com is often inactive when not in use. If inactive, it may take approximately 50 seconds to restart and become accessible when someone tries to access it.


Contact

KISHOREKUMAR S: kishore88708585@gmail.com


MANIKANDAN S: manidev0018@gmail.com





