 const loader = document.getElementById('loader');
const contentContainer = document.getElementById('content-container');
let page = 1; // Track which "page" of content to load next

// Function to load more content
function loadMoreContent(pageNumber) {
    // In a real application, you would make an AJAX call to a server here
    // For this example, we'll just add static content
    console.log(`Loading page ${pageNumber}...`);
    const newContent = document.createElement('div');
    newContent.innerHTML = `<p>New content from page ${pageNumber} added at ${new Date().toLocaleTimeString()}.</p>`;
    contentContainer.appendChild(newContent);

    // After loading, increment the page counter
    page++;
}

// Set up the Intersection Observer
const observer = new IntersectionObserver(entries => {
    // Check if the loader element is intersecting (visible)
    if (entries[0].isIntersecting) {
        loadMoreContent(page);
    }
}, {
    root: null, // Observe relative to the viewport
    threshold: 1.0 // Trigger when 100% of the loader is visible
});

// Start observing the loader element
observer.observe(loader);

// Load the first page on initial load
loadMoreContent(page);
