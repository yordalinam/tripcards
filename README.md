# Clone the repo
git clone https://github.com/yordalinam/tripcards.git
cd trip-explorer

# Install dependencies
npm install

# Run the app
npm run dev

# Features
* Responsive Grid - Auto-adjusts from 3 columns to 1 (mobile)

* Search - Debounced filtering (500ms)

*  Rating Sort Toggle (asc/desc)

*  Rating Sort - Toggle ascending/descending

*  Rich Modals - Scrollable descriptions with image preview

*  Loading/Error States 


# Design Decisions
* Sass @use modules - using variables (v.$purple-main) in every scss component
* gap: 1rem - Consistent spacing system across flex/grid layouts
* Hover lift effects - transform: translateY(-2px) + shadow
* Portal modals - createPortal to #modal putside of the root
* Replacement of some of the links to the cards api (the image link) with some of the already existing ones - as 4 or 5 of them gave back error 404 (missing resource)

# Tradeoffs: 
* There is no footer, routing, navigation - mainly because of the simplicuty of the website.
* The lift effects on the cards could get a bit loafy on mobile 
* custom scroll bars (using webkit) is generallly not a best practice as not all browser maintain it - in this project, I chose to do this for simplicity
* did not exctract all the possible components - for example, the PrimaryButton component could have been made more flexible - to be used for the other buttons
across the website - in the modal, the sorting toggle etc.



