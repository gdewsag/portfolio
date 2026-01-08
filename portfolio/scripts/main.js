//🌙☀️
document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('theme-toggle');
	if (!toggleBtn) return;
	
	const savedTheme = localStorage.getItem('theme') || 'light';
	applyTheme(savedTheme);
	
	toggleBtn.addEventListener('click', () => {
		const current = document.body.classList.contains('dark') ? 'light' : 'dark';
		applyTheme(current);
		localStorage.setItem('theme', current);
	} );
	
	function applyTheme(theme){
		if (theme === 'dark') {
			document.body.classList.add('dark');
			toggleBtn.textContent = '☀️';
		} else {
			document.body.classList.remove('dark');
			toggleBtn.textContent = '🌙';
		}
	}
});