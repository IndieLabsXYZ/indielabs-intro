document.addEventListener('DOMContentLoaded', function() {
    const modalBtns = document.querySelectorAll('.frame__demo');
    modalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
            
            const closeModalBtn = modal.querySelector('.close');
            closeModalBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            window.addEventListener('click', function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });
        });
    });
});