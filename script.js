const contentDiv = document.querySelector('#information');
// contentDiv.appendChild(London().Content('Paris'))

function openCity(evt, cityName) {
    // Declare all variables
    let i
    contentDiv.innerHTML = ''
    contentDiv.appendChild(createContent().content(cityName));

  }

  function createContent () {
    return{
      content: function (cityName) {
        let container = document.createElement('div');
        container.classList.add('contentContainer');

        let heading = document.createElement('h3');
        heading.classList.add('heading');
        heading.innerHTML += cityName;
        container.appendChild(heading);
        
        let mainContent = document.createElement('p');
        mainContent.innerHTML += `This is some example Text about ${cityName}. ${cityName} is a really nice City!`;
        container.appendChild(mainContent);

        return container;
      }
    }
  }

