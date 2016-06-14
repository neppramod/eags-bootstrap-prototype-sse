    $(function () {
        setNavigation();


        /* Send email to students */
        $("#email_send").click(function () {
              bootbox.confirm("Are you sure you want to send email?", function(result) {
                if (result == true) {
                  bootbox.alert("Email sent", function() {
                    window.location.href = "send_email_list.html";
                  });
                }
              });

        });

        $("#email_cancel").click(function () {
              bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
                    window.location.href = "send_email_list.html";
                }
              });
        });
		
		/* Template of change status*/
		$("#template_edit").click(function () {
              bootbox.confirm("Are you sure you want to change status?", function(result) {
                if (result == true) {
                  bootbox.alert("Status changed", function() {
				  // change the url to landing page
                    window.location.href = "send_email_list.html";
                  });
                }
              });

        });

        $("#template_cancel").click(function () {
              bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
				    // change the url to landing page
                    window.location.href = "send_email_list.html";
                }
              });
        });
		
		/* Delete Template  */
		$("#template_delete").click(function () {
              bootbox.confirm("Are you sure you want to delete an email template?", function(result) {
                if (result == true) {
                  bootbox.alert("Email template deleted", function() {
				  // change the url to landing page
                    window.location.href = "manage_email.html";
                  });
                }
              });

        });

        $("#del_cancel").click(function () {
              bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
				    // change the url to landing page
                    window.location.href = "manage_email.html";
                }
              });
        });

		/* Edit Template  */
		$("#template_edit").click(function () {
              bootbox.confirm("Are you sure you want to update an email template?", function(result) {
                if (result == true) {
                  bootbox.alert("Email template updated", function() {
				  // change the url to landing page
                    window.location.href = "manage_email.html";
                  });
                }
              });

        });

        $("#edit_cancel").click(function () {
              bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
				    // change the url to landing page
                    window.location.href = "manage_email.html";
                }
              });
        });
		
		/* Create Template  */
		$("#template_create").click(function () {
              bootbox.confirm("Are you sure you want to create an email template?", function(result) {
                if (result == true) {
                  bootbox.alert("Email template created", function() {
				  // change the url to landing page
                    window.location.href = "manage_email.html";
                  });
                }
              });

        });

        $("#create_cancel").click(function () {
              bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
				    // change the url to landing page
                    window.location.href = "manage_email.html";
                }
              });
        });

        /* Save email for manager */
        $("#email_save").click(function () {
            bootbox.confirm("Are you sure you want to save?", function(result) {
                if (result == true) {
                    bootbox.alert("Email template saved", function() {
                        window.location.href = "manage_email.html";
                    });
                }
            });

        });

/*
        $("#email_cancel").click(function () {
            bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
                    window.location.href = "manage_email.html";
                }
            });
        });
*/
      /* Save email for manager */
        $("#analyst_save").click(function () {
        bootbox.confirm("Are you sure you want to save?", function(result) {
            if (result == true) {
              bootbox.alert("Analyst information saved", function() {
                window.location.href = "manage_analyst.html";
              });
            }
          });
        });

        $("#analyst_cancel").click(function () {
        bootbox.confirm("Are you sure you want to cancel?", function(result) {
            if (result == true) {
              window.location.href = "manage_analyst.html";
            }
          });
        });

        /* Change major */
        $(".remove_major").click(function () {
            bootbox.confirm("Are you sure you want to delete Anthropology?", function(result) {
                if (result == true) {
                    bootbox.alert("Major deleted", function() {
                    });
                }
            });
        });


        $("#major_save").click(function () {
            bootbox.confirm("Are you sure you want to save?", function(result) {
                if (result == true) {
                    bootbox.alert("Major information saved", function() {
                        window.location.href = "edit_majors.html";
                    });
                }
            });
        });

        $("#major_cancel").click(function () {
            bootbox.confirm("Are you sure you want to cancel?", function(result) {
                if (result == true) {
                    window.location.href = "edit_majors.html";
                }
            });
        });

        /* Reload page on student search */
         $("#student_search").keyup(function (e) {
	        if(e.keyCode == 13) {
	          location.reload();
	          this.value='';
	        }
        });

        $("#email_log_clear").click(function () {
        bootbox.confirm("Are you sure you want to delete email log?", function(result) {
            if (result == true) {
              $("#email_log_body").html("");
              $("#email_log_download").html("");
              $("#email_log_clear").html("");
            }
          });
        });
		/* delete button on manage_email.html page */
		
		$(".btn_del").click(function () {
        bootbox.confirm("Are you sure you want to delete ?", function(result) {
            if (result == true) {
              bootbox.alert("Deleted Successfully", function() {
			  window.location.href = "manage_email.html";
                });
            }
          });
        });
		
		
		

        $(".resend_email").click(function () {
        bootbox.confirm("Are you sure you want to resend email to Abel Maclead ?", function(result) {
            if (result == true) {
              bootbox.alert("Email sent to Abel Maclead", function() {
                });
            }
          });
        });
        /* Admin login or manager login */
        $("#signin").click(function(event){
            event.preventDefault();
            var username = $("#txt_username");
            var password = $("#txt_password");

            if (username.val() != "" && password.val() != "") {
                if(username.val() == "admin" || username.val() == "manager"
                  || username.val() == "Manager") {
                   window.location.href = "manage_email.html";
                } else {
                    window.location.href = "send_email_list.html";
                }
            }

        });
        /* send_email_list.html  */
    });


function setNavigation() {
    //var path = window.location.pathname;

    path=document.location.href.match(/[^\/]+$/)[0];

    //path = path.replace(/\/$/, "");
    //path = decodeURIComponent(path);

    $(".nav a").each(function () {
        var href = $(this).attr('href');

        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}
