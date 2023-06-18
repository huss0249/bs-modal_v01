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
	let dataObj = selectedBtn.getAttribute('data-bs-obj')
	let dataCat = selectedBtn.getAttribute('data-bs-cat')
	let dataMsg = selectedBtn.getAttribute('data-bs-msg')

	let dataFull = selectedBtn.getAttribute('data-bs-full')
	// let $msg = selectedBtn.getAttribute('data-bs-full')[msg]
	let $msgA = modals_data[`msg${dataObj}`].msg
	let $msg = modals_data[dataFull].msg

	let modalTitle = $modal.querySelector('.modal-title')
	let modalBody = $modal.querySelector('.modal-body')
	let modalFooter = $modal.querySelector('.modal-footer')

	let modal_parts = {
		title: $modal.querySelector('.modal-title'),
		body: $modal.querySelector('.modal-body'),
		footer: $modal.querySelector('.modal-footer'),
	}

	// Update the modal's content.

	let $modal_data = {
		icon: '',
		title: '',
		body: modals_data[`msg${dataObj}`].msg,
		controls: [],
		callbacks: []
	}

	
	console.log('dddd = ', $msg)	
	console.log('eeeee = ', $msgA)	

	console.log(' direct => msg2.msg => ', modals_data.msg2.msg);
	
	console.log('wwww = > ', `msg${dataObj}.msg`);

	console.log(`msg${dataObj}.msg`);

	console.log(Object.toString(`msg${dataObj}.msg`));
	
	modalTitle.textContent = `${$msg}`
	modalBody.textContent = `${$msg}`

	modalTitle.textContent = `${$modal_data.title}`
	modalBody.textContent = `${$modal_data.body}`

	if (dataCat === '0') {
		// modalBody.textContent = `${dataObj}.Msg`
		modalTitle.innerHTML = `<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>`
		modalFooter.innerHTML = ''
	} else if (dataCat === '1') {
		modalTitle.innerHTML = `<i class="fa fa-2x fa-info-circle" aria-hidden="true"></i>`
		modalFooter.innerHTML = `<button class='btn btn-info' data-bs-dismiss="modal">: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}</button>`
		console.log(dataCat)
	} else if (dataCat === '2') {
		modalFooter.innerHTML = `
		<button class='btn btn-info' data-bs-dismiss="modal">${dataObj}</button>
		<button class='btn btn-info' data-bs-dismiss="modal">: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}</button>
		`
		console.log(dataCat)
	}

	return update_modal($modal_data, modal_parts)
}
const update_modal = (obj, modal_parts) => {
	
	console.log('obj ======= > ', obj, modal_parts);

	modal_parts.title.textContent = `${obj.title}`
	modal_parts.body.textContent = `${obj.body}`
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