
# Video Streaming App (YouTube Clone)

## Project Overview
Developed a YouTube Clone (Frontend Only), replicating the UI and interactive features of YouTube. This project focuses on modern UI design, responsiveness, and dynamic content rendering using **React, JavaScript, HTML, CSS, and Bootstrap**. It features locally stored video data, React Router for navigation,React Context API for theme toggling, and Bootstrap for a responsive UI experience.

##  Key Features  

-  **Video Browsing** – Browse a collection of videos stored locally in `videos.json`.  
-  **Search Functionality** – Search for videos by title using a search bar.   
-  **Video Playback** – Watch videos with an embedded player.  
-  **Comments Section** – Displays comments added bu users on the videos  
-  **Dark/Light Mode** – Toggle between dark and light themes using the React Context API.  
-  **Responsive UI** – Fully responsive layout built with **Bootstrap** for seamless viewing on different devices.  

---

## Tech Stack  

| Category               | Technology Used               |
|-----------------------|-----------------------|
| **Frontend**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap) |
| **State Management**&nbsp;&nbsp;&nbsp;&nbsp; | ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react) |
| **Icons**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ![React-Icons](https://img.shields.io/badge/React--Icons-000000?style=for-the-badge) |
| **Deployment**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) |
| **Version Control**&nbsp;&nbsp;&nbsp;&nbsp; | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github) |
| **Code Editor**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code) |



## Project Folder Structure
YouTube Clone  
├── 📂 public  
│   ├── youtube.png  # Logo for the browser tab  
│   ├── index.html  
│  
├── 📂 src  
│   ├── 📂 assets  
│   │   ├── getTimeAgo.js  # Utility function for time calculations  
│   │   ├── videos.json  # Locally stored video data  
│   │   ├── youtube_dark.png  # Dark mode logo  
│   │   ├── youtube_light.png  # Light mode logo  
│  
│   ├── 📂 components  
│   │   ├── CommentsSection.jsx    
│   │   ├── Gaming.jsx   
│   │   ├── Home.jsx    
│   │   ├── Layout.jsx    
│   │   ├── Music.jsx    
│   │   ├── Page404.jsx  
│   │   ├── RelatedVideos.jsx    
│   │   ├── SearchResults.jsx    
│   │   ├── Technology.jsx    
│   │   ├── ThemeToggle.jsx    
│   │   ├── Trending.jsx    
│   │   ├── VideoCard.jsx    
│   │   ├── VideoDetails.jsx    
│   │   ├── VideoPlayer.jsx
│  
│   ├── 📂 Context  
│   │   ├── ThemeContext.jsx    
│  
│   ├── 📂 CSS  
│   │   ├── Layout.css    
│   │   ├── RelatedVideos.css    
│   │   ├── VideoDetails.css    
│  
│   ├── App.css    
│   ├── App.jsx    
│   ├── index.css    
│   ├── index.jsx    
│  
├── package.json    
├── README.md    

## Project Setup Instructions  

Follow these steps to run the project locally on your system:  

### 1. Clone the Repository  
First, clone the repository to your local machine using Git:  
```sh
git clone https://github.com/KaushikKU003/video_streaming_app.git
cd your-repo
```
###  2. Install Dependencies 
```sh
npm run install
```

### 3. Start the Development Server
```sh
npm run start
```

### 4. Open your browser and visit 
```sh
http://localhost:3000
```

## Overview of Components  

Each component plays a specific role in rendering and managing the UI of the YouTube Clone. Below is an overview of each component:  

### **Core Components**  

- **`Home.jsx`** → Displays the homepage with a feed of videos fetched from `videos.json`.  
- **`Layout.jsx`** → Defines the main layout structure, including the sidebar and navbar.  
- **`VideoDetails.jsx`** → Displays a single video with its details, related videos, and comments.  
- **`VideoPlayer.jsx`** → Renders the embedded video player and its description.  
- **`SearchResults.jsx`** → Displays search results when a user searches for a video.  
- **`Trending.jsx`** → Displays a list of trending videos.  
- **`Music.jsx`** → Filters and displays videos related to music.  
- **`Gaming.jsx`** → Filters and displays videos related to gaming.  
- **`Technology.jsx`** → Filters and displays videos related to technology.  

### **Utility & Interactive Components**  

- **`CommentsSection.jsx`** → Displays user comments for each video.  
- **`RelatedVideos.jsx`** → Shows a sidebar with videos related to the currently playing video.  
- **`ThemeToggle.jsx`** → Manages dark/light theme switching using React Context API.  

### **Reusable Components & Utility Functions**  

- **`VideoCard.jsx`** → A reusable component that displays a single video thumbnail, title, and metadata..  
- **`getTimeAgo.js`** → A utility function that converts timestamps into human-readable "time ago" formats (e.g., "2 hours ago", "3 days ago"). Used for displaying the uploaded time of videos.


## Dataset  

The video data is stored locally in a JSON file located at:  

```sh
src/assets/videos.json
```

##  External Dependencies  

The project requires the following external dependencies to function properly:  

- **Bootstrap** – For responsive design and styling.  
- **React Router DOM** – For client-side routing.  
- **React Icons** – For using icons in the UI.  

### Installation  
Run the following command to install all required dependencies:  

```sh
npm install bootstrap react-router-dom react-icons


### JSON Structure  

The dataset follows a structured format containing metadata for each video, including its details, author, engagement metrics, and comments.  

#### JSON Structure Overview  

```json
{
    "id": "",                  // Unique identifier for the video
    "title": "",               // Video title
    "thumbnailUrl": "",        // URL for the video thumbnail
    "duration": "",            // Video duration (e.g., "8:18")
    "uploadTime": "",          // Date when the video was uploaded
    "views": "",               // Total number of views
    "author": "",              // Creator of the video
    "profileUrl": "",          // URL of the author's profile image
    "videoUrl": "",            // Direct link to the video file
    "description": "",         // Brief description of the video
    "likes": "",               // Number of likes
    "subscriber": "",          // Subscriber count for the author's channel
    "isLive": "",              // Boolean indicating if the video is live

    "comment_count": "",       // Total number of comments
    "extracted_comment_count": "", // Processed comment count

    "comments": [
        {
            "comment_id": "",   // Unique identifier for the comment
            "channel": {
                "name": "",      // Name of the commenter
                "link": "",      // Link to the commenter's channel
                "thumbnail": "", // Profile image of the commenter
                "verified": ""   // Boolean indicating verification status
            },
            "published_date": "",  // Date when the comment was posted
            "content": "",         // Comment text
            "vote_count": "",      // Number of likes on the comment
            "extracted_vote_count": "", // Processed vote count
            "reply_count": ""      // Number of replies to the comment
        }
    ]
}
```

---
## Deployment  

- The project is deployed on **Vercel**: [YouTube Clone](https://kaushik-video-streaming-app.vercel.app/)  
- The source code is available on **GitHub**: [GitHub Repository](https://github.com/KaushikKU003/video_streaming_app)  


## Conclusion  

This YouTube Clone project successfully replicates the core UI/UX of YouTube using React, Bootstrap, and Context API. It provides features like video browsing, search functionality, video playback, theme toggling, and category filtering. The project emphasizes responsive design and efficient state management**, making it a great frontend development exercise.  

## Future enhancements
Future enhancements could include backend integration, user authentication, and real-time video streaming for a more dynamic experience.

## References  

Here are some resources that were helpful during the development of this project:  

- [YouTube](https://www.youtube.com/) – Inspiration for UI/UX design.  
- [Bootstrap](https://getbootstrap.com/) – Used for styling and responsive design.  
- [NPM](https://www.npmjs.com/) – Package manager for installing dependencies.  
- [Google Fonts](https://fonts.google.com/) – Used for typography enhancements.  
- [Stack Overflow](https://stackoverflow.com/) – Helped with debugging and problem-solving.  
- [React Icons](https://react-icons.github.io/react-icons/search/#q=sad) – Used for adding icons to the UI.  

