/**
 * Created by Administrator on 2017/2/25.
 */
requirejs.config({
    baseUrl: '/',

    paths: {
        jquery:'lib/jquery/jquery.min',
        jqueryCookie:'lib/jquery-cookie/jquery.cookie',
        bootstrap:'lib/bootstrap/js/bootstrap.min',
        userList:'js/user/userList',
        userProfile:'js/user/userProfile',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        teacherAdd: 'js/teacher/teacher_add',
        teacherList: 'js/teacher/teacher_list',
        courseAdd: 'js/course/add',
        courseAddStep1: 'js/course/add_step1',
        courseAddStep2: 'js/course/add_step2',
        courseAddStep3: 'js/course/add_step3',
        courseCategory: 'js/course/category',
        courseCategoryAdd: 'js/course/category_add',
        courseList: 'js/course/list',
        courseTopic: 'js/course/topic',
        common: 'js/common/common'
    },

    shim: {
        bootstrap: {
            deps: ['jquery']
        }

    }

});

require(['jquery', 'bootstrap', 'common']);

(function(window) {
    var pathname = window.location.pathname;
    

        switch(pathname){
            case '/html/user/user_list.html':
                require(['userList']);
                break;
            case '/html/user/user_profile.html':
                require(['userProfile']);
                break;
            case '/html/home/login.html':
                require(['login']);
                break;
            case '/html/home/repass.html':
                require(['repass']);
                break;
            case '/html/home/settings.html':
                require(['settings']);
                break;
            case '/html/teacher/teacher_add.html':
                require(['teacherAdd']);
                break;
            case '/html/teacher/teacher_list.html':
                require(['teacherList']);
                break;
            case '/html/course/add.html':
                require(['courseAdd']);
                break;
            case '/html/course/add_step1.html':
                require(['courseAddStep1']);
                break;
            case '/html/course/add_step2.html':
                require(['courseAddStep2']);
                break;
            case '/html/course/add_step3.html':
                require(['courseAddStep3']);
                break;
            case '/html/course/category.html':
                require(['courseCategory']);
                break;
            case '/html/course/category_add.html':
                require(['courseCategoryAdd']);
                break;
            case '/html/course/list.html':
                require(['courseList']);
                break;
            case '/html/course/topic.html':
                require(['courseTopic']);
                break;
        }
    });

})(window);