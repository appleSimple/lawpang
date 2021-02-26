const questions = document.querySelectorAll('.faq_box .question span');
const answers = document.querySelectorAll('.faq_box .question p');


for(let i=0; i<questions.length; i++) {
	questions[i].onclick = () => {
		if (answers[i].classList.contains('dis_none')) {
			for(let j=0; j<answers.length; j++){
				answers[j].classList.add('dis_none');
			}

			answers[i].classList.remove('dis_none');
		} else {
			return null;
		}
	}
}
