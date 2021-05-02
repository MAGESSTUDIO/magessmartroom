//Change URL of website on Line 14

function LoadModal() {
    if (!$("#websiteModal").length) {
        $("body").append('\
        <div class="modal fade" id="websiteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">\
        <div class="modal-dialog modal-xl">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <h5 class="modal-title" id="staticBackdropLabel">Robot Website</h5>\
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
                </div>\
                <div class="modal-body">\
                    <iframe src="https://e-cocoa-dashboard.azurewebsites.net" crossorigin="anonymous" width="100%" height="800px"></iframe>\
                </div>\
            </div>\
        </div>\
      </div>');
    }
    $("#websiteModal").modal("show");
}
