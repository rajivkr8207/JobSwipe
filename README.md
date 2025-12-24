# JobSwiper

**JobSwiper** is a student-facing job discovery and application interface built with a swipe-based UX.  


---

## 🔍 Project Overview

JobSwiper allows students to:

- Discover jobs using a Tinder-style swipe interface  
  - Swipe left to skip  
  - Swipe right to show interest  
- View detailed job descriptions and eligibility criteria  
- Apply for a job  
- Receive a **mocked ATS score and missing keyword feedback** after applying  
---

## 🧩 Component Structure

The application is structured using small, focused

### Core Components

- **SwipeDeck**
  - Manages the list of jobs displayed as swipeable cards
  <!-- - Handles swipe gestures
  - Controls which job is currently active -->

- **JobCard**
  - Displays individual job information (title, company, tags)
  - Pure presentational component
  - Reusable across swipe and preview contexts

- **Job**
  - Displays job title, description ,eligibility criteria and etc 
  - Acts as the decision point before applying
  - Connected to global job state

- **ApplyConfirmation**
  - Shown after a successful message
  - Displays mocked ATS score and missing keywords
  - Confirms that the application flow is complete
---
## 🛠 Tech Stack

- Next.js
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Static Data
---

## 🧠 State Management Choices

### Why Redux Toolkit?

Redux Toolkit is used to manage job data state globally and easy to use.

**Reasons for choosing Redux Toolkit:**
- Job data is shared across multiple screens (Swipe, Detail, Apply)
- Application status (`applied`) must stay consistent across navigation
- Redux Toolkit provides predictable state updates and clean reducer logic
- Built-in Immer support allows safe and readable state mutations

### Approach

- All jobs are stored in a global Redux slice
- Applying for a job updates the job’s `apply` status in global state
- UI across all screens reflects the updated state instantly

---
## 🎨 UX Tradeoffs

Several conscious tradeoffs were made to keep the project focused and practical:

### Mocked ATS Score
- demo ATS systems resume parsing.
- This keeps the focus on UX clarity and application flow

### Simple Swipe Animations
- Swipe interactions are intentionally lightweight
- Priority was given to responsiveness and usability over complex gesture physics


