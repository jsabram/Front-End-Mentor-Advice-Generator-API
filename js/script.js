const adviceID = document.querySelector('.advice-id');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.btn');
const URL = 'https://api.adviceslip.com/advice';

const generateAdvice = () => {
	axios.get(URL).then((res) => {
		const adviceText = res.data.slip.advice;
		advice.innerHTML = `"${adviceText}"`;

		const id = res.data.slip.id;
		adviceID.innerHTML = id;
	});
};

btn.addEventListener('click', generateAdvice);
