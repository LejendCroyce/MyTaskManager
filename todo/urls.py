from django.urls import path
from .views import home, addTask,deleteTask, completedTask, editedTask

urlpatterns=[
    # path("", logIn, name="loginPage"),
    # path("<str:lastname>/<str:firstname>", logInDetails),
    path("", home,name = 'home'),
    path("add_task", addTask,name='add_task'),
    path("complete-task/<int:task_id>", completedTask, name='check_completed'),
    path("delete-task/<int:task_id>", deleteTask, name='delete_task'),
    path("edit-task/<int:task_id>", editedTask, name='edit_task'),
    # path("filter-active", activeFilter, name='active_filter' )
]
