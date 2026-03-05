// Recommendation data for Beach, Temple, and Country (6 points total)
const travelData = {
    beach: {
        name: "Bora Bora, French Polynesia",
        description: "Experience the ultimate tropical paradise with crystal-clear turquoise waters and luxury overwater bungalows.",
        images: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80"
        ]
    },
    temple: {
        name: "Angkor Wat, Cambodia",
        description: "Explore the largest religious monument in the world, a stunning architectural masterpiece from the Khmer Empire.",
        images: [
            "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600100397608-f09009943542?auto=format&fit=crop&w=600&q=80"
        ]
    },
    country: {
        name: "Kyoto, Japan",
        description: "Discover a perfect blend of ancient tradition and modern beauty, featuring historic temples and serene gardens.",
        images: [
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80"
        ]
    }
};

function searchDestination() {
    const userInput = document.getElementById('destinationInput').value.toLowerCase().trim();
    const resultDiv = document.getElementById('recommendations');
    
    // Clear previous results
    resultDiv.innerHTML = '';

    // Check if input matches our categories
    let destination;
    if (userInput.includes('beach')) {
        destination = travelData.beach;
    } else if (userInput.includes('temple')) {
        destination = travelData.temple;
    } else if (userInput.includes('japan') || userInput.includes('country')) {
        destination = travelData.country;
    } else {
        resultDiv.innerHTML = "<p>Please try searching for 'beach', 'temple', or 'country'.</p>";
        return;
    }

    // Generate HTML for the recommendation
