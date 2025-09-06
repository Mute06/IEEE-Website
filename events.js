document.addEventListener('DOMContentLoaded', () => {
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(events => {
            const upcomingEventsContainer = document.getElementById('upcoming-events');
            const pastEventsContainer = document.getElementById('past-events');
            const today = new Date();
            today.setHours(0, 0, 0, 0); 

            // Sorts by Distance between event date and today
            events.sort((a, b) =>  Math.abs(new Date(a.date) - today) - Math.abs(new Date(b.date) - today));

            events.forEach(event => {
                const eventDate = new Date(event.date);
                const isUpcoming = eventDate >= today;

                const eventColumn = document.createElement('div');
                
                if (isUpcoming)
                {
                    eventColumn.className = 'col-sm-12 col-lg-4 col-md-6 mb-4 d-flex';
                }
                else
                {
                    eventColumn.className = 'col-sm-12 col-md-4 col-lg-2 mb-4 d-flex';
                }
                const eventStatusClass = isUpcoming ? 'upcoming-event' : 'past-event';

                eventColumn.innerHTML = `
                    <div class="card mx-auto ${eventStatusClass}">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-center">${event.title}</h5>
                            <p class="card-text text-center fw-light">${event.date}</p>
                            ${event.link ? `<a href="${event.link}" class="btn btn-primary">Keşfet</a>` : ""}
                        </div>
                    </div>
                `;
                
                if (isUpcoming) {
                    upcomingEventsContainer.appendChild(eventColumn);
                } else {
                    pastEventsContainer.appendChild(eventColumn);
                }
            });
        })
        .catch(error => {
            console.error('Fetch işleminde bir sorun oluştu:', error);
        });
});