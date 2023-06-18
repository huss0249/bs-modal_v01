globalThis.modals_data = {
	msg1: { 'head': 'head1', 'msg': 'Hello from msg1', 'yes': 'A1', 'no': 'B1', 'ok': 'ok' },
	msg2: { 'head': 'head1', 'msg': 'Hello from msg2', 'yes': 'A2', 'no': 'B2', 'ok': 'ok2' }
}//----------------------------------------------------------

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
	<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
	<button type="button" class="btn btn-primary">Send message</button>
*/
/*
--------------------------------------------------------
*/

// START HERE
const $modal = init_modal()

bootstrap.Modal.getOrCreateInstance($modal)

let $main = document.getElementById('main')
$main.append($modal)

const generate_modal_data = (selectedBtn) => {
	// Extract info from data-bs-* attributes
	let extracted = {
		obj: selectedBtn.getAttribute('data-bs-obj'),
		cat: selectedBtn.getAttribute('data-bs-cat'),
		msg: selectedBtn.getAttribute('data-bs-msg'),
	}

	let modal_parts = {
		title: $modal.querySelector('.modal-title'),
		body: $modal.querySelector('.modal-body'),
		footer: $modal.querySelector('.modal-footer'),
	}

	// Update the modal's content.
	let $modal_data = {
		icon: '',
		head: modals_data[`msg${extracted.obj}`].head,
		body: modals_data[`msg${extracted.obj}`].msg,
		controls: [],
		callbacks: [],
	}

	if (extracted.cat === '0') {
		// modalBody.textContent = `${dataObj}.Msg`
		$modal_data.icon = `<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>`
		$modal_data.head = '' 
		$modal_data.controls = '' 
	} else if (extracted.cat === '1') {
		$modal_data.icon = '<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>'
		// $modal_data.head = modals_data[`msg${extracted.obj}`].head
		$modal_data.controls = `<button class='btn btn-info' data-bs-dismiss="modal">${modals_data[`msg${extracted.obj}`].ok}</button>`
	} else if (extracted.cat === '2') {
		$modal_data.controls = ` 
		<button class='btn btn-info' data-bs-dismiss="modal">${modals_data[`msg${extracted.obj}`].yes}</button>
		<button class='btn btn-info' data-bs-dismiss="modal">${modals_data[`msg${extracted.obj}`].no}</button>
		`
	}
	return update_modal($modal_data, modal_parts)
}

const update_modal = (obj, modal_parts) => {
	
	console.log('obj ======= > ', obj, modal_parts);

	// modal_parts.title.textContent = `${obj.icon} ${obj.head}`
	modal_parts.title.innerHTML = `${obj.icon} ${obj.head}`
	modal_parts.body.textContent = `${obj.body}`
	modal_parts.footer.innerHTML = `${obj.controls}`
return
}

const select_modal = (e) => {
	let selectedBtn = e.target
	generate_modal_data(selectedBtn)
}

const $en = document.querySelector('#en')
const $fr = document.querySelector('#fr')
const $info = document.querySelector('#info')
const $close = document.querySelector('#close')

$en.addEventListener('click', select_modal)
$fr.addEventListener('click', select_modal)
$info.addEventListener('click', select_modal)
$close.addEventListener('click', select_modal)