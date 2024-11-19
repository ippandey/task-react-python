# **Healthcare Dashboard Project**

This project is a Healthcare Dashboard built using **ReactJS** for the frontend and **Python (Flask)** for the backend. The dashboard allows users to input their name, age, and upload a file, which can then be submitted and displayed on a separate result page.

## **Features**

1. **Input Form**:
   - Fields to enter **Name** (text input).
   - Dropdown menu to select **Age** (1–100).
   - File upload feature for uploading a document or image.

2. **Submit Button**:
   - Submits the user input to the backend.
   - Displays a success message upon successful submission.

3. **Result Page**:
   - Displays the submitted information, including:
     - Name
     - Age
     - Preview of the uploaded file (if it is an image).

4. **Modern UI/UX**:
   - Designed with **Material-UI** for a clean and user-friendly interface.
   - Fully responsive for desktop and mobile devices.

5. **Routing**:
   - Built-in navigation between the form page and the result page using **React Router**.

## **Tech Stack**

### **Frontend**:
- ReactJS
- React Router for navigation
- Material-UI for styling

### **Backend**:
- Python (Flask)
- Handles form submissions via REST API

## **How to Run the Project**

### **Frontend Setup**:
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

### **Backend Setup**:
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```
4. Backend will run at:
   ```
   http://127.0.0.1:5000
   ```

### **Integration**:
Ensure both the frontend and backend servers are running. The frontend will make API calls to the backend for data submission.

## **File Structure**

### **Frontend (React)**
```
frontend/
├── src/
│   ├── components/
│   │   ├── Form.jsx        # Form component
│   │   ├── ResultPage.jsx  # Displays submitted data
│   ├── App.js              # Routing configuration
│   ├── index.js            # React entry point
├── public/                 # Static assets
├── package.json            # Frontend dependencies
```

### **Backend (Python)**
```
backend/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
```


## **Author**
Priyanshu Pandey
priyanshu.p2025@gmail.com
6307732117
