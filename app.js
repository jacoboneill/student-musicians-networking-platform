roles = ["Musicians", "Live Engineers", "Studio Engineers", "DJ's"];
roleSpan = document.getElementById("role");

let charIndex = 0;
let roleIndex = 0;

function deleting() {
	if (charIndex <= 0) {
		if (roleIndex >= roles.length - 1) {
			roleIndex = 0;
		} else {
			roleIndex++;
		}
		setTimeout(typing, 1000);
	} else {
		roleSpan.textContent = roleSpan.textContent.slice(0, -1);
		charIndex--;
		setTimeout(deleting, 120);
	}
}

function typing() {
	if (charIndex >= roles[roleIndex].length) {
		setTimeout(deleting, 1000);
	} else {
		roleSpan.textContent += roles[roleIndex].charAt(charIndex);
		console.log;
		charIndex++;
		setTimeout(typing, 120);
	}
}

typing();
