document.addEventListener('DOMContentLoaded', function() {
    // Get course data from URL
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    const videoId = urlParams.get('video');
    
    // Course data (should match your courses.js)
    const courses = {
        'js': {
            title: 'JavaScript Development',
            description: 'Master modern JavaScript for building interactive web applications. This comprehensive course takes you from fundamental concepts to advanced techniques used by professional developers.',
            duration: '6 Hours',
            lessons: [
                'Introduction to JavaScript',
                'Variables and Data Types',
                'Functions and Scope',
                'DOM Manipulation',
                'Async Programming',
                'Modern ES6+ Features'
            ],
            videoId: 'PkZNo7MFNFg'
        },
        'python': {
            title: 'Python Programming',
            description: 'Learn Python from the ground up with hands-on projects and real-world applications.',
            duration: '8 Hours',
            lessons: [
                'Python Basics',
                'Data Structures',
                'Object-Oriented Programming',
                'Working with APIs',
                'Data Analysis Basics'
            ],
            videoId: 'rfscVS0vtbw'
        },
        'cpp': {
            title: 'C++ Development',
            description: 'Learn powerful C++ programming for system development and game programming.',
            duration: '10 Hours',
            lessons: [
                'C++ Fundamentals',
                'Pointers and Memory Management',
                'Object-Oriented Concepts',
                'Standard Template Library',
                'Game Development Basics'
            ],
            videoId: 'Rub-JsjMhWY'
        },
        'java': {
            title: 'Java Development',
            description: 'Comprehensive Java course for building enterprise applications and Android apps.',
            duration: '12 Hours',
            lessons: [
                'Java Syntax Basics',
                'Collections Framework',
                'Multithreading',
                'Spring Boot Fundamentals',
                'Android Development Intro'
            ],
            videoId: 'grEKMHGYyns'
        },
        'sql': {
            title: 'SQL Development',
            description: 'Master database management and querying with SQL for data-driven applications.',
            duration: '5 Hours',
            lessons: [
                'Database Fundamentals',
                'SQL Queries',
                'Joins and Relationships',
                'Indexes and Optimization',
                'Stored Procedures'
            ],
            videoId: 'HXV3zeQKqGY'
        },
        'html': {
            title: 'HTML Development',
            description: 'Modern HTML5 for building the structure of web applications with best practices.',
            duration: '3 Hours',
            lessons: [
                'HTML Document Structure',
                'Forms and Input Types',
                'Semantic HTML5',
                'Accessibility Basics',
                'SEO Fundamentals'
            ],
            videoId: 'UB1O30fR-EE'
        },
        'css': {
            title: 'CSS Development',
            description: 'Advanced CSS techniques including Flexbox, Grid, and responsive design principles.',
            duration: '4 Hours',
            lessons: [
                'CSS Selectors',
                'Flexbox Layout',
                'CSS Grid',
                'Animations and Transitions',
                'Responsive Design'
            ],
            videoId: 'yfoY53QXEnI'
        }
    };
    
    // Load course data
    if (courseId && courses[courseId] && videoId) {
        const course = courses[courseId];
        
        // Set course info
        document.getElementById('course-title').textContent = course.title;
        document.getElementById('course-description').textContent = course.description;
        document.getElementById('course-duration').textContent = course.duration;
        
        // Set YouTube video
        const video = document.getElementById('course-video');
        video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        
        // Generate lesson list
        const lessonList = document.getElementById('lesson-list');
        if (course.lessons) {
            course.lessons.forEach(lesson => {
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                lessonItem.innerHTML = `
                    <i class="fas fa-play-circle"></i>
                    <span>${lesson}</span>
                `;
                lessonList.appendChild(lessonItem);
            });
        }
    } else {
        // Redirect back if invalid URL
        window.location.href = 'index.html';
    }
});