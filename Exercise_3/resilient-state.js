const statePanels = document.querySelectorAll('.state-panel');
const retryButton = document.querySelector('.retry-button');

function setState(state) {
    statePanels.forEach((panel) => {
        panel.hidden = !panel.classList.contains(`${state}-state`);
    });

    const loadingPanel = document.querySelector('.loading-state');
    loadingPanel.setAttribute('aria-busy', String(state === 'loading'));
}

const requestedState = new URLSearchParams(window.location.search).get('state');
const initialState = ['loading', 'live', 'empty', 'error'].includes(requestedState)
    ? requestedState
    : 'loading';

setState(initialState);

retryButton.addEventListener('click', () => {
    setState('loading');
    window.history.replaceState({}, '', `${window.location.pathname}?state=loading`);
});