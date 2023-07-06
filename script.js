    // Fetch the JSON file
    fetch('diary.json')
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Access the diary entries
        const diaryEntries = data.diaryEntries;

        // Get the 'entries' element
        const entriesContainer = document.getElementById('diary');

        // Iterate through the diary entries
        diaryEntries.forEach(entry => {
          // Create a new paragraph element for each entry
          const entryElement = document.createElement('p');
          entryElement.textContent = `${entry.date}: ${entry.entry}`;

          // Append the entry element to the 'entries' container
          entriesContainer.appendChild(entryElement);
        });
      })
      .catch(error => {
        console.log('An error occurred:', error);
      });

      