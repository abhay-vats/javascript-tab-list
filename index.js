//  Select elements
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// Setup tab click listener callback
const handleTabClick = (e) => {
  // Hide all tab panels and unselect all tabs
  tabPanels.forEach((panel) => (panel.hidden = true));
  tabButtons.forEach((button) => button.setAttribute('aria-selected', false));

  // Show the required panel
  const clickedButton = e.currentTarget;
  const selectedPanel = tabPanels.find(
    (panel) => panel.getAttribute('aria-labelledby') === clickedButton.id
  );
  selectedPanel.hidden = false;

  // Select the clicked tab
  clickedButton.setAttribute('aria-selected', true);
};

// Add click listeners to tab buttons
tabButtons.forEach((button) =>
  button.addEventListener('click', handleTabClick)
);
