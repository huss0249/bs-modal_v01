const msg1 = { 'head': 'head1', 'msg': 'Hello from msg1', 'Yes': 'A1', 'No': 'B1', 'Ok': 'ok'}
const msg2 = { 'head': 'head1', 'msg': 'Hello from msg2', 'Yes': 'A2', 'No': 'B2', 'Ok': 'ok'}
//----------------------------------------------------------

const init_modal = () => {
	let modal = document.createElement('div')
	modal.id = 'modal'
	modal.className = 'modal fade'
	modal.setAttribute('tabindex', '-1')
	modal.setAttribute('aria-labelledby', 'modalLabel')
	modal.setAttribute('aria-hidden', 'true')
	modal.innerHTML = `
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content shadow">
							<div class="modal-header justify-content-center border-0">
							<h5 class="modal-title fs-5" id="modalLabel">New message</h5>
							<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body text-center">

							</div>
							<div class="modal-footer justify-content-center border-0">

							</div>
						</div>
						</div>
						`
/* 							<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" class="btn btn-primary">Send message</button> */
	return modal
}

const $modal = init_modal()

bootstrap.Modal.getOrCreateInstance($modal)

let $main = document.getElementById('main')
$main.append($modal)

const update_modal = (selectedBtn) => {
	// Extract info from data-bs-* attributes
	let dataObj = selectedBtn.getAttribute('data-bs-obj')
	let dataCat = selectedBtn.getAttribute('data-bs-cat')
	let dataMsg = selectedBtn.getAttribute('data-bs-msg')

	let modalTitle = $modal.querySelector('.modal-title')
	let modalBody = $modal.querySelector('.modal-body')
	let modalFooter = $modal.querySelector('.modal-footer')


	// console.log(`${msg1['msg']}`);
	// console.log(`${msg2['msg']}`);
	console.log(' direct => msg2.msg => ', msg2.msg);
	
	console.log(`${dataObj[ 'msg' ]}`);
	console.log(dataObj['msg']);
	
	function read_prop(obj, prop) {
		return obj[prop];
	}
	
	read_prop(dataObj, 'msg')
	
	if (dataCat === '0') {
		// console.log(dataObj)
		// console.log([`${dataObj}.msg`]);
		// console.log(Object.toString(`${dataObj}.msg`));


		// console.log(`${eval(dataObj).msg}`);
		// console.log(`${String(dataObj)['msg']}`);
		// console.log(`${msg1['msg']}`);
		// console.log(`${dataObj['msg']}`);


		

		// el[`${currentLanguage}_name`]

		// for (let [key, value] of Object.entries(msg2)) {
		// 	console.log(key)
		// 	console.log(value)
		//   }
		
		// modalBody.textContent = `${["dataObj"]["msg"]}`
		// modalBody.textContent = `${eval(bb).msg}`
		// modalBody.textContent = `${bb[keyAsVariable].msg}`
		
		// modalBody.textContent = `${dataObj}`
		modalBody.textContent = `${dataObj}.Msg`
	} else if (dataCat === '1') {
		console.log(dataCat)
	} else if (dataCat === '2') {
		console.log(dataCat)
	}
	// Update the modal's content.
	// modalTitle.textContent = `Data: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}`
	modalTitle.textContent = ''
	// modalBody.textContent = `Data: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}`
	modalFooter.innerHTML = `<button class='btn btn-info'>: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}</button>`
}

const generate_modal = (e) => {
	let selectedBtn = e.target
	// console.log('selectedBtn => ', selectedBtn)

	update_modal(selectedBtn)

	// // Extract info from data-bs-* attributes
	// let dataObj = selectedBtn.getAttribute('data-bs-obj')
	// let dataCat = selectedBtn.getAttribute('data-bs-cat')
	// let dataMsg = selectedBtn.getAttribute('data-bs-msg')

	// let modalTitle = $modal.querySelector('.modal-title')
	// let modalBody = $modal.querySelector('.modal-body')
	// let modalFooter = $modal.querySelector('.modal-footer')
	
	// // Update the modal's content.
	// modalTitle.textContent = `Data: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}`
	// modalBody.textContent = `Data: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}`
	// modalFooter.innerHTML = `<button class='btn btn-info'>: ${selectedBtn} | ${dataObj} | ${dataCat} | ${dataMsg}</button>`
}

const $en = document.querySelector('#en')
const $fr = document.querySelector('#fr')
const $info = document.querySelector('#info')
const $close = document.querySelector('#close')

$en.addEventListener('click', generate_modal)
$fr.addEventListener('click', generate_modal)
$info.addEventListener('click', generate_modal)
$close.addEventListener('click', generate_modal)


/* if ($modal) {
	$modal.addEventListener('show.bs.modal', event => {
		// Button that triggered the modal
		const btnTarget = event.relatedTarget
		console.log('btnTarget => ', btnTarget)

		// Extract info from data-bs-* attributes
		const dataObj = btnTarget.getAttribute('data-bs-obj')
		console.log('dataObj => ', dataObj)

		const dataCat = btnTarget.getAttribute('data-bs-cat')
		console.log('dataCat => ', dataCat)

		const dataMsg = btnTarget.getAttribute('data-bs-msg')
		console.log('dataMsg => ', dataMsg)

		// Update the modal's content.
		const modalTitle = $modal.querySelector('.modal-title')
		const modalBody = $modal.querySelector('.modal-body')

		modalTitle.textContent = `Data: ${btnTarget} | ${dataObj} | ${dataCat} | ${dataMsg}`
		modalBody.textContent = `Data: ${btnTarget} | ${dataObj} | ${dataCat} | ${dataMsg}`
	})
} */















/*
const $myModal = document.getElementById('modal')

if ($myModal) {
	$myModal.addEventListener('show.bs.modal', event => {
		// Button that triggered the modal
		const btnTarget = event.relatedTarget
		console.log('btnTarget => ', btnTarget)

		// Extract info from data-bs-* attributes
		const dataTarget = button.getAttribute('data-bs-whatever')
		console.log('dataTarget => ', dataTarget)

		// If necessary, you could initiate an Ajax request here
		// and then do the updating in a callback.

		// Update the modal's content.
		const modalTitle = $myModal.querySelector('.modal-title')
		// const modalBodyInput = $myModal.querySelector('.modal-body input')

		modalTitle.textContent = `New message to ${dataTarget}`
		modalBodyInput.value = dataTarget
	})
}
//----------------------------------------------------------

//----------------------------------------------------------
let $main = document.getElementById('main')
let $modal
// const showModal = (title, description, yesBtnLabel = 'Yes', noBtnLabel = 'Cancel', callback) => {
const showModal = (flag, obj) => {
	if(!$modal) {
		$modal = document.createElement('div')
		$modal.id = 'modal'
		$modal.setAttribute('data-bs-keyboard', 'true')
		$modal.setAttribute('tabindex', '-1')
		$modal.setAttribute('aria-labelledby', 'modalLabel')
		$modal.setAttribute('aria-hidden', 'true')
			// $main.append($modal);
	} else {
		// $modal.parentNode.removeChild($modal)
		$modal.innerHTML = ''
		$modal.hide()
		// $modal.dispose()
		// console.log($main)
		
		// $modal = document.createElement('div')
		// $modal.id = 'modal'
		// $modal.setAttribute('data-bs-keyboard', 'true')
		// $modal.setAttribute('tabindex', '-1')
		// $modal.setAttribute('aria-labelledby', 'modalLabel')
		// $modal.setAttribute('aria-hidden', 'true')
	}
	// console.log($main)
	
	$modal.innerHTML = `
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header justify-content-center border-0">
						<h5 class="modal-title fs-5" id="modalLabel">${obj.head} : ${flag}</h5>
						${ flag === 0 ? `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` : ''}
					</div>
					<div class="modal-body text-center">
						<p>${obj.msg}</p>
					</div>
					<div class="modal-footer justify-content-center border-0">
					${ flag === 1 ? `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">${!obj.Ok ? `${obj.Yes}` : `${obj.Ok}`}</button>` : ''}
					
					${ flag === 2 ? `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">${obj.Yes}</button>` : '' }
					${ flag === 2 ? `<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">${obj.No}</button>` : '' }
					</div>					
				</div>
			</div>
	`;
	// console.log($modal.innerHTML)
	// $modal = bootstrap.Modal.getOrCreateInstance($modal)
	let modal = new bootstrap.Modal($modal)
	modal.show();

	$main.append(modal);
	console.log($main)
}
//----------------------------------------------------------

const generate_modal = function(e) {

	// First parameter: [
		// 0: close btn only,
		// 1: One Ok button (creates the first button only),
		// 2: Two buttons (Yes, No)
	// ]

	e.target.id === 'en' ? 	showModal(2, msg1) : ''
	e.target.id === 'fr' ? 	showModal(2, msg2) : ''
	
	e.target.id === 'info' ? 	showModal(1, msg1) : ''
	e.target.id === 'close' ? 	showModal(0, msg2) : ''
}

const $en = document.querySelector('#en')
const $fr = document.querySelector('#fr')
const $info = document.querySelector('#info')
const $close = document.querySelector('#close')

$en.addEventListener('click', generate_modal)
$fr.addEventListener('click', generate_modal)
$info.addEventListener('click', generate_modal)
$close.addEventListener('click', generate_modal)

// $en.addEventListener('click', showModal(2, msg1))
// $fr.addEventListener('click', showModal(2, msg2))
// $info.addEventListener('click', showModal(1, msg1))
// $close.addEventListener('click', showModal(0, msg2))

*/