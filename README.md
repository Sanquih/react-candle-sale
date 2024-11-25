# Candle Sale

This responsive webpage, made with React and libraries such as Redux, react-router-dom, react-hook-form, and Zod, provides a seamless and user-friendly experience for creating and ordering your own custom aromatic candles. Users can select their preferred essences, sizes, and styles, ensuring a personalized product that meets their needs. The design prioritizes ease of navigation and responsiveness, creating an enjoyable shopping experience.

## Demo

https://react-candle-sale.netlify.app/

## With this project, I practiced

- **Redux:** To efficiently manage the global state of the application, particularly for managing the cart and candle customization options.
- **Style Modules:**
  - Used CSS Modules to scope styles locally to each component, ensuring style conflicts were avoided and the project maintained a clean and modular structure.
  - Enhanced the maintainability of the codebase by defining styles directly within their respective components, allowing better alignment with React’s component-based architecture.
- **react-router-dom:** To navigate between pages, ensuring smooth transitions and a clear structure for different sections of the site.
- **Custom hooks:**
  - Encapsulated and reused logic for fetching data such as available essences, styles, and sizes.
  - Implemented logic for creating a new candle, assigning it to the currently active customization session, and managing the entire workflow of a user's interaction with a candle.
  - Designed hooks to handle the process of generating and sending the order message to ensure users can confirm their selections and finalize their purchase seamlessly.
- **react-hook-form and Zod:**
  - To build and validate forms for user interactions. For instance, the form used for specifying candle quantities was tightly controlled with Zod schemas to ensure type safety and proper validation rules.
  - Streamlined error handling and improved the user experience with dynamic feedback for form inputs.

## Development server

Run `npm run dev` for a dev server. Navigate to http://localhost:5173/. The app will automatically reload if you change any of the source files.

## 📸 Screenshots 
![image](https://github.com/user-attachments/assets/7df932af-58fd-446d-a801-5c83728d3222)
![image](https://github.com/user-attachments/assets/2b5d7d36-47ea-4735-a89a-5e1c0296b8b7)
![image](https://github.com/user-attachments/assets/f2b13643-49bd-416a-8c51-8533004da7ee)
![image](https://github.com/user-attachments/assets/109a4a0e-5e6a-4faa-928c-5986d3474835)
![image](https://github.com/user-attachments/assets/06b841b7-1606-494a-a474-4593d2377949)
![image](https://github.com/user-attachments/assets/196e4b27-bf14-46fc-b7c2-f66b8d7b9136)

## 📸 Screenshots Mobile
![image](https://github.com/user-attachments/assets/36df879f-2b7a-4b42-865d-0eb0ca670d5d)
![image](https://github.com/user-attachments/assets/ed46b492-e95c-4242-bc96-65573c5512b3)
![image](https://github.com/user-attachments/assets/896a21d2-b565-4aee-8e4a-887100a7f34f)
![image](https://github.com/user-attachments/assets/6d35d315-922f-40a4-b26a-5bb817047fa8)
![image](https://github.com/user-attachments/assets/b7ced2d0-cbe4-41df-a536-5a9ed8139659)
![image](https://github.com/user-attachments/assets/d7457b3c-c2b5-4abb-84ad-15ef7286f178)
