document.addEventListener('DOMContentLoaded', () => {
  const placeholders = [
      "I want to help students learn better...",
      "I want to solve environmental problems...",
      "I want to make people's lives easier...",
      "I want to create something fun...",
      "I want to improve healthcare...",
      "I want to kill someone...",
      "I want to fake your work and over-work your juniors...",
      "I want to assert your worthless power over your juniors...",
      "I want to make fake promises to companies just for a few bucks...",
      "I want to make juniors do your trashy work because I'm incompetent...",
];

  const textarea = document.getElementById('promptInput');
  const submitBtn = document.getElementById('submitBtn');
  const responseContainer = document.getElementById('responseContainer');
  const submitIcon = document.querySelector('.submit-icon');
  const loader = document.querySelector('.loader');

  textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
      submitBtn.disabled = !textarea.value.trim();
  });

  let placeholderIndex = 0;
  setInterval(() => {
      textarea.placeholder = placeholders[placeholderIndex];
      placeholderIndex = (placeholderIndex + 1) % 6;
  }, 2000);

  submitBtn.addEventListener('click', async () => {
      const prompt = textarea.value.trim();
      if (!prompt) return;

      submitBtn.disabled = true;
      submitIcon.style.display = 'none';
      loader.style.display = 'block';

      try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          const responses = [
              {
                  idea: "EcoTracker",
                  description: "Track and reduce carbon footprint through daily challenges.",
                  techStack: ["React Native", "Node.js", "MongoDB", "AWS"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "MealPlanner",
                  description: "Automate weekly meal plans with health and budget preferences.",
                  techStack: ["Vue.js", "Firebase", "Express", "Bootstrap"],
                  difficulty: "Easy"
              },
              {
                  idea: "MindfulMoments",
                  description: "A mindfulness and meditation app with community features.",
                  techStack: ["React", "Node.js", "PostgreSQL", "Heroku"],
                  difficulty: "Easy"
              },
              {
                  idea: "FitQuest",
                  description: "Gamify personal fitness with challenges and leaderboards.",
                  techStack: ["React Native", "MongoDB", "Express", "AWS"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "SkillExchange",
                  description: "A platform for users to swap skills and learn together.",
                  techStack: ["Angular", "Firebase", "Node.js"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "LocalExplorer",
                  description: "Discover local activities, restaurants, and events nearby.",
                  techStack: ["Next.js", "MongoDB", "Tailwind"],
                  difficulty: "Easy"
              },
              {
                  idea: "MoodTracker",
                  description: "Track daily moods and suggest mental health resources.",
                  techStack: ["React", "Node.js", "SQLite", "Material UI"],
                  difficulty: "Easy"
              },
              {
                  idea: "BookSwap",
                  description: "Exchange books in your community with a point-based system.",
                  techStack: ["Angular", "Express", "MySQL", "Bootstrap"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "JobBuddy",
                  description: "Manage and track job applications with reminders.",
                  techStack: ["Vue.js", "Firebase", "Express"],
                  difficulty: "Easy"
              },
              {
                  idea: "SmartGarden",
                  description: "Monitor plant health and automate watering schedules.",
                  techStack: ["React Native", "Node.js", "MongoDB", "IoT"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "EventPlanner",
                  description: "Create and share event schedules with real-time updates.",
                  techStack: ["Vue.js", "Node.js", "AWS", "Bootstrap"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "EcoShop",
                  description: "E-commerce platform focusing on sustainable products.",
                  techStack: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "PetConnect",
                  description: "Platform to match pets in shelters with potential adopters.",
                  techStack: ["React", "Node.js", "GraphQL", "AWS"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "ArtDiscover",
                  description: "Browse and connect with local artists and galleries.",
                  techStack: ["Vue.js", "Express", "MongoDB", "Bootstrap"],
                  difficulty: "Easy"
              },
              {
                  idea: "TravelTrack",
                  description: "Plan and document travel itineraries with expenses.",
                  techStack: ["React Native", "Node.js", "PostgreSQL"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "BudgetBuddy",
                  description: "Track personal finances with charts and spending alerts.",
                  techStack: ["React", "Firebase", "Express"],
                  difficulty: "Easy"
              },
              {
                  idea: "RecipeFinder",
                  description: "Suggest recipes based on available ingredients.",
                  techStack: ["Angular", "Node.js", "MongoDB"],
                  difficulty: "Easy"
              },
              {
                  idea: "LanguageExchange",
                  description: "Learn languages with native speakers through chats and calls.",
                  techStack: ["React", "WebRTC", "Express", "Socket.io"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "CodeCollab",
                  description: "A real-time coding platform for pair programming.",
                  techStack: ["Next.js", "Node.js", "Socket.io", "MongoDB"],
                  difficulty: "Intermediate"
              },
              {
                  idea: "VolunteerHub",
                  description: "Connect volunteers with local non-profit organizations.",
                  techStack: ["Vue.js", "Express", "MySQL"],
                  difficulty: "Easy"
              },
              {
                  idea: "MusicMatch",
                  description: "Find local musicians to collaborate with on new projects.",
                  techStack: ["React", "Node.js", "GraphQL", "AWS"],
                  difficulty: "Intermediate"
              }
          ];

          const randomIndex = Math.floor(Math.random() * responses.length);
          displayResponse(responses[randomIndex]);
      } catch (error) {
          console.error('Error:', error);
      } finally {
          submitBtn.disabled = false;
          submitIcon.style.display = 'block';
          loader.style.display = 'none';
      }
  });

  function displayResponse(response) {
      document.getElementById('ideaTitle').textContent = response.idea;
      document.getElementById('ideaDescription').textContent = response.description;

      const techStackContainer = document.getElementById('techStack');
      techStackContainer.innerHTML = response.techStack
          .map(tech => `<span class="tech-tag">${tech}</span>`)
          .join('');

      const difficultyElement = document.getElementById('difficultyLevel');
      difficultyElement.textContent = response.difficulty;
      difficultyElement.className = `difficulty-${response.difficulty.toLowerCase()}`;

      responseContainer.classList.remove('hidden');
      responseContainer.offsetHeight;
      responseContainer.classList.add('visible');
  }

  textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          if (!submitBtn.disabled) {
              submitBtn.click();
          }
      }
  });
});
