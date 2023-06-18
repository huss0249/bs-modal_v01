// Global modal data source
globalThis.modals_data = {
	msg1: { 'head': 'head1', 'msg': 'Hello from msg1', 'yes': 'A1', 'no': 'B1', 'ok': 'ok' },
	msg2: { 'head': 'head2', 'msg': '<p style="color: red"><b>Hello</b></p> from <a href="http://google.ca" target="blank">Link</a> in msg2', 'yes': 'A2', 'no': 'B2', 'ok': 'ok2' }
}

//----------------------------------------------------------
// INIT modal structure
const init_modal = () => {
	let modal = document.createElement('div')
	modal.id = 'modal'
	modal.className = 'modal fade'
	modal.setAttribute('tabindex', '-1')
	modal.setAttribute('aria-labelledby', 'modalLabel')
	modal.setAttribute('aria-hidden', 'true')
	modal.innerHTML = `<div class="modal-dialog modal-dialog-centered">
							<div class="modal-content shadow">
								<div class="modal-header justify-content-center border-0">
									<h5 class="modal-title fs-5" id="modalLabel"></h5>
									<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div class="modal-body text-center"></div>
								<div class="modal-footer justify-content-center border-0"></div>
							</div>
						</div>`
	return modal
}

/*
--------------------------------------------------------
*/

// START HERE
const $modal = init_modal()
// Link modal to bootstrap class
bootstrap.Modal.getOrCreateInstance($modal)

let $main = document.getElementById('main')
$main.append($modal)

let $modal_extract = {}
let $modal_parts = {}
let $modal_data = {}

// Check the style of the desired modal (Only close btn, close and 1 dismiss, close and 2 dismiss)
const check_modal_style = () => {
	if ($modal_extract.style === '0') {
		//fontawesom
		// $modal_data.icon = `<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>`		
		$modal_data.icon = `<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>`

		$modal_data.head = ''
		$modal_data.controls = '' 
	} else if ($modal_extract.style === '1') {
		//fontawesom
		// $modal_data.icon = '<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>'
		$modal_data.icon = '<i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i>'

		$modal_data.controls = `<button 
										class='btn btn-info'
										type="button"
										data-bs-dismiss="modal"
										data-bs-respond="ok"
										>${modals_data[`msg${$modal_extract.obj}`].ok}</button>`
	} else if ($modal_extract.style === '2') {
		$modal_data.head = ''
		$modal_data.controls = `<button
										class='btn btn-info'
										type="button"
										data-bs-dismiss="modal"
										data-bs-respond="yes"
										>${modals_data[`msg${$modal_extract.obj}`].yes}</button>
								<button
										class='btn btn-info'
										type="button"
										data-bs-dismiss="modal"
										data-bs-respond="no"
										>${modals_data[`msg${$modal_extract.obj}`].no}</button>
		`
	}
	return
}

const generate_modal_data = (selectedBtn) => {
	// Extract info from data-bs-* attributes
	$modal_extract = {
		obj: selectedBtn.getAttribute('data-bs-obj'),
		style: selectedBtn.getAttribute('data-bs-style'),
		html: selectedBtn.getAttribute('data-bs-html'),
	}

	// modal parts to update dynamically
	$modal_parts = {
		title: $modal.querySelector('.modal-title'),
		body: $modal.querySelector('.modal-body'),
		footer: $modal.querySelector('.modal-footer'),
	}

	// Update the modal's content.
	$modal_data = {
		icon: '',
		head: modals_data[`msg${$modal_extract.obj}`].head,
		body: modals_data[`msg${$modal_extract.obj}`].msg,
		controls: [],
		callbacks: [],
	}

	check_modal_style()
	return update_modal($modal_data, $modal_parts)
}

$modal.addEventListener('show.bs.modal', event => {})


// add Event listeners
const modal_events = (e) => {
	console.log(e.target.textContent)
	console.log(e.target.getAttribute('data-bs-respond'))
}
// add Event listeners
let modal_controls = () => {
	$modal.addEventListener('hide.bs.modal', event => {	})
	
	if ($modal_extract.style === '2') {
		let $btnYes = $modal.querySelector('[data-bs-respond="yes"]')
		$btnYes.addEventListener('click', modal_events)
	
		let $btnNo = $modal.querySelector('[data-bs-respond="no"]')
		$btnNo.addEventListener('click', modal_events)
	} else if ($modal_extract.style === '1') {
		let $btnOk = $modal.querySelector('[data-bs-respond="ok"]')
		$btnOk.addEventListener('click', modal_events)
	} //else if ($modal_extract.style === '0') {
	//}
	return
}



const htmlToTxt = (html_data) => {
	// Create a new div element
	let tmp_div = document.createElement("div");
  
	// Set the HTML content with the given value
	tmp_div.innerHTML = html_data;
  
	// Retrieve the text property of the element
	return tmp_div.textContent || tmp_div.innerText || "";
  }
  
//   var htmlString =
// 	"<div><h1>Bears Beets Battlestar Galactica </h1>\n<p>Quote by Dwight Schrute</p></div>";
  
// console.log(convertToPlain(htmlString));
  



// modal parts filled dynamically
const update_modal = (obj, $modal_parts) => {

	console.log('$modal_extract html => ', $modal_extract.html)


	$modal_parts.title.innerHTML = `${obj.icon} ${obj.head}`

	// $modal_parts.body.textContent = `${obj.body}`
	// $modal_parts.body.innerHTML = `${obj.body}`

	// Will render body content as HTML as required
	// $modal_extract.html ? $modal_parts.body.innerHTML = `${obj.body}` : $modal_parts.body.textContent = `${obj.body}`




	$modal_extract.html === 'true' ? $modal_parts.body.innerHTML = `${obj.body}` : $modal_parts.body.textContent = htmlToTxt(`${obj.body}`)

	$modal_parts.footer.innerHTML = `${obj.controls}`
	
	modal_controls()
	return
}

// Get the selected source button
const select_modal = (e) => {
	let selectedBtn = e.target
	generate_modal_data(selectedBtn)
}

// Interaction starts from here
const $en = document.querySelector('#en')
const $fr = document.querySelector('#fr')
const $info = document.querySelector('#info')
const $close = document.querySelector('#close')

// Buttons event listener to execute the interaction
$en.addEventListener('click', select_modal)
$fr.addEventListener('click', select_modal)
$info.addEventListener('click', select_modal)
$close.addEventListener('click', select_modal)