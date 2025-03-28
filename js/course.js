document.addEventListener('DOMContentLoaded', function() {
  // Course data
 // In your courses.js
const courses = {
  'JS Development': {
      description: 'Learn to create dynamic, interactive web applications...',
      duration: '6 Hours',
      lessons: ['Introduction to JavaScript', 'Variables and Data Types', /*...*/],
      videoId: 'PkZNo7MFNFg' // JavaScript course video
  },
  'Python': {
      description: 'Master Python programming...',
      duration: '8 Hours',
      lessons: ['Python Basics', 'Data Structures', /*...*/],
      videoId: 'rfscVS0vtbw' // Python course video
  },
  'C++ Development': {
      description: 'Learn powerful C++ programming...',
      duration: '10 Hours',
      lessons: ['C++ Basics', 'Object-Oriented Programming', /*...*/],
      videoId: 'Rub-JsjMhWY' // C++ course video
  },
  'Java Development': {
      description: 'Comprehensive Java course...',
      duration: '12 Hours',
      lessons: ['Java Fundamentals', 'Collections Framework', /*...*/],
      videoId: 'grEKMHGYyns' // Java course video
  },
  'SQL Development': {
      description: 'Master database management...',
      duration: '5 Hours',
      lessons: ['SQL Basics', 'Joins and Subqueries', /*...*/],
      videoId: 'HXV3zeQKqGY' // SQL course video
  },
  'Html Development': {
      description: 'Modern HTML5 for building...',
      duration: '3 Hours',
      lessons: ['HTML Structure', 'Forms and Inputs', /*...*/],
      videoId: 'UB1O30fR-EE' // HTML course video
  },
  'CSS Development': {
      description: 'Advanced CSS techniques...',
      duration: '4 Hours',
      lessons: ['CSS Selectors', 'Flexbox Layout', /*...*/],
      videoId: 'yfoY53QXEnI' // CSS course video
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

// Handle enrollment - Add this to your existing courses.js
// Add this RIGHT AFTER your modal closing logic (keep all other code exactly the same)
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('enroll-btn')) {
      const courseName = document.getElementById('modalCourseTitle').textContent;
      
      // Complete video ID mapping for ALL courses
      const videoIds = {
          'JS Development': 'PkZNo7MFNFg',
          'Python': 'rfscVS0vtbw', 
          'C++ Development': 'Rub-JsjMhWY',
          'Java Development': 'grEKMHGYyns',
          'SQL Development': 'HXV3zeQKqGY',
          'Html Development': 'UB1O30fR-EE',
          'CSS Development': 'yfoY53QXEnI'
      };

      // Get the video ID
      const videoId = videoIds[courseName];
      
      if (videoId) {
          // 1. First close the modal (keep your existing modal closing logic)
          document.getElementById('courseModal').style.display = 'none';
          
          // 2. Then redirect (with slight delay for smooth transition)
          setTimeout(() => {
              const courseId = courseName.toLowerCase()
                                    .replace(/ /g, '-')
                                    .replace('++', 'pp')
                                    .replace('-development', '');
              
              window.location.href = `course-player.html?course=${courseId}&video=${videoId}`;
          }, 300); // 300ms delay allows modal to close first
      } else {
          alert('This course is coming soon! Check back later.');
          console.error('Video not found for:', courseName);
      }
  }
});

  // Helper function to convert course name to URL-friendly ID
  function getCourseId(courseName) {
    const idMap = {
        'JS Development': 'js',
        'Python': 'python',
        'C++ Development': 'cpp',
        'Java Development': 'java',
        'SQL Development': 'sql',
        'Html Development': 'html',
        'CSS Development': 'css'
    };
    return courseName.toLowerCase()
    .replace(/ /g, '-')
    .replace('++', 'pp')
    .replace(' development', '');
}
});