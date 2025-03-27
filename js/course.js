document.addEventListener('DOMContentLoaded', function() {
    // Course data
    const courses = {
      'JS Development': {
        description: 'Learn to create dynamic, interactive web applications with JavaScript. Perfect for beginners to advanced developers.',
        duration: '6 Hours',
        lessons: '24 Lessons',
        whatYouLearn: ['DOM manipulation', 'ES6+ features', 'Async programming', 'Web APIs']
      },
      'Python': {
        description: 'Master Python programming from basics to advanced concepts. Great for automation, data science, and web development.',
        duration: '8 Hours',
        lessons: '30 Lessons',
        whatYouLearn: ['Python syntax', 'Data structures', 'OOP concepts', 'Popular frameworks']
      },
      // Add similar data for other courses
      'C++ Development': {
        description: 'Learn powerful C++ programming for system development and game programming.',
        duration: '10 Hours',
        lessons: '35 Lessons'
      },
      'Java Development': {
        description: 'Comprehensive Java course for building enterprise applications and Android apps.',
        duration: '12 Hours',
        lessons: '40 Lessons'
      },
      'SQL Development': {
        description: 'Master database management and querying with SQL for data-driven applications.',
        duration: '5 Hours',
        lessons: '20 Lessons'
      },
      'Html Development': {
        description: 'Modern HTML5 for building the structure of web applications with best practices.',
        duration: '3 Hours',
        lessons: '15 Lessons'
      },
      'CSS Development': {
        description: 'Advanced CSS techniques including Flexbox, Grid, and responsive design principles.',
        duration: '4 Hours',
        lessons: '18 Lessons'
      }
    };
  
    // Get modal elements
    const modal = document.getElementById('courseModal');
    const modalTitle = document.getElementById('modalCourseTitle');
    const modalDesc = document.getElementById('modalCourseDescription');
    const modalDuration = document.getElementById('modalCourseDuration');
    const closeBtn = document.querySelector('.close-modal');
  
    // Make all course cards clickable
    document.querySelectorAll('.course-div').forEach(card => {
      card.addEventListener('click', function() {
        const courseName = this.querySelector('.section-common--title').textContent;
        const course = courses[courseName];
        
        // Set modal content
        modalTitle.textContent = courseName;
        modalDesc.textContent = course.description;
        modalDuration.textContent = course.duration;
        
        // Show modal
        modal.style.display = 'block';
      });
    });
  
    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Handle enrollment
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('enroll-btn')) {
        const courseName = modalTitle.textContent;
        alert(`You have successfully enrolled in the ${courseName} course! Check your email for access.`);
        modal.style.display = 'none';
        
        // In a real app, you would send this to your backend
        console.log(`User enrolled in: ${courseName}`);
      }
    });
  });