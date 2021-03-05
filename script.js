/// <reference path="../jquery-3.5.1.js" />

$('document').ready(function () {
    var container = $('.container');
    $('#fetch').on('click', function () {
        container.html("");
        $.get('https://codingninjas.in/api/v3/courses', function (data) {
            var courses = data.data.courses;
            courses.forEach(e => {
                if (e.preview_image_url !== '')
                    container.append(`
                        <div class="card">
                            <div class="image-container">
                                <img src="${e.preview_image_url}" alt="">
                            </div>
                            <div class="description d-flex">
                                <div class="name">${e.name}</div>
                                <div class="level">${e.level}</div>
                            </div>
                        </div>`);
            });
        });
    });

});