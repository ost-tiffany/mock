
Vue.use(VueTables.ClientTable);

window.app = new Vue({
    el: '#app',
    components: {
    },
    data: {
        current_content:0,
        job_name: '',
        name_setting: '',
        setting: '0',
        new_userid: '',
        new_username: '',
        new_password: '',
        range_rust_confidence: 0.5,
        range_trans_confidence: 0.5,
        range_black: 40,
        detect_pealing: true,
        parameter_display_status: false,
        user_id : '',
        user_password:'',
        taskText: '',
        tasks: [],
        isEditModalActive: true,


        errorMessage_login : [],
        errorMessage_job : [],
        errorMessage_user : [],


        job_list_columns: [
            'job_name',
            'number_of_images',
            'status',
            'created_at',
            'job_actions' 
        ],
        job_list_data: [
            {job_name: '診断結果1', number_of_images: '5', status:'完了', created_at: '2019年11月19日 18時30分50秒'},
            {job_name: '診断結果2', number_of_images: '3', status:'完了', created_at: '2019年11月19日 18時35分50秒'},
            {job_name: '診断結果3', number_of_images: '7', status:'完了', created_at: '2019年11月19日 18時40分50秒'},
            {job_name: '診断結果4', number_of_images: '1', status:'未完了', created_at: '2019年11月19日 18時45分50秒'},
            {job_name: '診断結果5', number_of_images: '3', status:'未完了', created_at: '2019年11月19日 18時50分50秒'},
        ],
        job_list_options: {
            headings: {
                job_name: '診断結果',
                number_of_images: '画像枚数',
                status: '処理状態',
                created_at: '登録日時',
                job_actions: ''
            },
            texts: {
                count:"{count}件中{from}件～{to}件 |{count}件|1件",
                filterPlaceholder: '検索する',
                filter:"フィルター:",
                noResults:"レコードがありません",
                filterBy:"{column}でフィルター",
                limit: "表示件数",
                defaultOption:'{column}',
            },
        },
        user_list_columns: [
            'user_id',
            'user_name',
            'created_at',
            'user_actions'
        ],
        user_list_data: [
            {user_id:'aaaaaaaa', user_name: 'ユーザ1', created_at: '2019年11月19日 18時30分50秒', user_password: 'hogehoge1', user_role: '1'},
            {user_id:'bbbbbbbb', user_name: 'ユーザ2', created_at: '2019年11月19日 18時30分50秒', user_password: 'hogehoge1', user_role: '1'},
            {user_id:'cccccccc', user_name: 'ユーザ3', created_at: '2019年11月19日 18時30分50秒', user_password: 'hogehoge1', user_role: '2'},
            {user_id:'dddddddd', user_name: 'ユーザ4', created_at: '2019年11月19日 18時30分50秒', user_password: 'hogehoge1', user_role: '2'},
            {user_id:'eeeeeeee', user_name: 'ユーザ5', created_at: '2019年11月19日 18時30分50秒', user_password: 'hogehoge1', user_role: '2'}
        ],
        user_list_options: {
            filterByColumn: false,
            headings: {
                user_id: 'ユーザID',
                user_name: '名前',
                created_at: '登録日時',
                user_actions: ''
            },
            texts: {
                count:"{count}件中{from}件～{to}件 |{count}件|1件",
                filterPlaceholder: '検索する',
                filter:"フィルター:",
                noResults:"レコードがありません",
                filterBy:"{column}でフィルター",
                limit: "表示件数",
                defaultOption:'{column}',
            },
            key: 'id',
        },
        edit_data: [
            'user_id',
            'user_name',
            'user_password',
            'user_role',
        ],
    },
    methods: {
        login() {
            this.errorMessage_login = [];
            //js + vue
            // if (this.user_id.trim() == "" ) {
            //     this.errorMessage.push("ユーザIDを記入してください");
            // }

            //jquery
            var user = $('#user_id').val();
            var pass = $('#password').val();

            //js 
            // var user_js = document.getElementById('user_id').value;
           
            if(user == "") {

                this.errorMessage_login.push("ユーザIDを記入してください");
            }
            if(pass == "") 
            {
                this.errorMessage_login.push("パスワードを記入してください");
            }
            if(this.errorMessage_login.length > 0) {
                return false;
            }
            
                this.current_content = 1; 
            
        },
        logout() {
            this.current_content = 0;
        },


        
        // load_settings() {
            
        //     document.getElementById("settei").addEventListener('click', myFunction());

        //     var name_setting = document.getElementById("name_setting");
        //     var setting = document.getElementById("setting");

        //    function myFunction(){
            
        //     if(name_setting == "" || setting == 0 ) {
        //         $('#koushinbutton').attr('disabled', true);
        //     }
        //     if (setting == 1) {
        //         this.range_rust_confidence = 1.0;
        //         this.range_trans_confidence = 1.0;
        //         $('#hozonbutton').attr('disabled', true);
        //     }
        //     if (setting == 2) {
        //         this.range_rust_confidence = 0.1;
        //         this.range_trans_confidence = 0.1;
        //         $('#hozonbutton').attr('disabled', true);
        //     } else {
        //         $('#koushinbutton').attr('disabled', false);
        //         $('#hozonbutton').attr('disabled', false);
        //     }
        // }
        // },

        btn_disable() {
            if(this.name_setting != "") {
                $('#koushinbutton').attr('disabled', true);
                $("#input_process_type3").attr('disabled', true);
                $('#click1').attr('disabled', true);
            }else {
                $('#koushinbutton').attr('disabled', false);
                $("#input_process_type3").attr('disabled', false);
                $('#click1').attr('disabled', false);
            }
        },

        load_settings() {

                if (this.setting == 1) {
                    this.range_rust_confidence = 1.0;
                    this.range_trans_confidence = 1.0;
                }
                if (this.setting == 2) {
                    this.range_rust_confidence = 0.1;
                    this.range_trans_confidence = 0.1;
                }
                if (this.setting == 0 || this.name_setting == "") {
                $('#hozonbutton').attr('disabled', false);
                $('#koushinbutton').attr('disabled', true);
                $('#name_setting').attr('disabled', false);
                }  
                if(this.setting !=0) {
                $('#hozonbutton').attr('disabled', true);
                $('#koushinbutton').attr('disabled', false);
                $('#name_setting').attr('disabled', true);
                }
    },




        add_job_content() {
            this.current_content = 1;
        },
        job_list_content() {
            this.current_content = 2;
        },
        user_content() {
            this.current_content = 3;
        },
        show_job() {
            this.current_content = 4;
        },
        delete_job(row) {
            this.$data.job_list_data.splice(row.index-1, 1);
        },
        delete_user(row) {
            this.$data.user_list_data.splice(row.index-1, 1);
        },

        delete_user_a(row) {
            this.$data.user_list.splice(row.index-1, 1);
        },
        add_job() {

            this.errorMessage_job = [];

            var job_name = $('#setting_job_name').val();
            var set_file = $('#setting_file').val();
            var new_setting1 = $('#input_process_type1').val();

            if(job_name == 0) {
                this.errorMessage_job.push("診断名を記入してください");
            }
            if(set_file == 0) {
                this.errorMessage_job.push("検出画像ファイルを選択してください");
            }
            if(new_setting1 == 0) {
                this.errorMessage_job.push("検出を設定してください");
            }

            if(this.errorMessage_job.length > 0) {
                return false;
            }
            
                let today = new Date();
                let year = today.getFullYear();
                let month = today.getMonth() + 1;
                let day = today.getDate();
                this.$data.job_list_data.push({
                    job_name         : job_name,
                    number_of_images : '1',
                    status           : '未完了',
                    created_at       : year + '年' + month + '月' + day + '日'
                });
                //kalo mau liat path = number_of_images : $('#setting_file')[0].value,
        },
        add_user() {

            this.errorMessage_user = [];
           
            var new_userid = $('#new_userid').val();
            var new_username = $('#new_username').val();
            var new_pass = $('#new_password').val();
            var new_setting2 = $('#input_process_type2').val();

            if(new_userid == 0) {
                this.errorMessage_user.push("ユーザIDを記入してください");
            }
            if(new_username == 0) {
                this.errorMessage_user.push("名前を記入してください");
            }
            if(new_pass == 0) {
                this.errorMessage_user.push("パスワードを記入してください");
            } 
            if (new_setting2 == 0) {
                this.errorMessage_user.push("権限を選択してください");
            }
            if(this.errorMessage_user.length > 0) {
                return false;
            }

            //pass the validation
            let today = new Date();
            let year = today.getFullYear();
            let month = today.getMonth() + 1;
            let day = today.getDate();
            this.$data.user_list_data.push({
                user_id     :new_userid,
                user_name   :new_username,
                created_at  : year + '年' + month + '月' + day + '日'
            });

            this.$refs['modal-1'].hide();
        },

        editModal(data) {
console.log(data);
            this.isEditModalActive = true;
        },
        change_user(tableData) {
            this.edit_data.push({
                user_id       : tableData.user_id,
                user_name     : tableData.user_name,
                user_password : tableData.user_password,
                user_role     : tableData.user_role,
            })
            $('#changeUserId').text() = tableData.user_id;
            $('#changeUserName').val() = tableData.user_id;
            $('#changeUserPassword').val() = tableData.user_id;
            $('#changeUserProcessType').val() = tableData.user_id;
        }
    },

    // mounted - program jalan ,dia jalan
    mounted() { 
        $("#color_range_slider").slider({
            id: "range_slider",
            min: 0,
            max: 255,
            range: true,
            value: [85, 170]
        }).on('slideStop', function(ev){
            var color_range_slider_value = $('#color_range_slider').val().split(",");
            update_color_range_text();
        });
        update_color_range_text();
        $('#example2').DataTable();
        $('#example').DataTable();
    }
})




function update_color_range_text() {
    var color_range_slider_value = $('#color_range_slider').val().split(",");
    $("#color_range_value_text1").text("高腐食度-中腐食度 閾値: " + color_range_slider_value[0]);
    $("#color_range_value_text2").text("中腐食度-低腐食度 閾値: " + color_range_slider_value[1]);
}

function get_current_date() {
    var d = new Date()
    return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日" + d.getHours() + "時" + d.getMinutes() + "分" + d.getSeconds() + "秒"
}
jQuery(function($) {
   $('#parameterDisplayStatus').on('click',function(){
    console.log('hoge');
   });
});
