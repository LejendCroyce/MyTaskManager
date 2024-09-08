from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import user, task


def home(request):
    tasks=task.objects.all()
    length = len(tasks)
    # activeTasks = get_active_tasks(request)
    # completeTasks= get_completed_task(request)
    context={
        "tasks": tasks,
        "length" :  length,
        # "activeTasks":activeTasks,
        # "completeTasks":completeTasks
    }
    return render(request,"todo.html",context)      
def addTask(request):
    if request.method == 'POST':
        taskItem = request.POST.get('add_todo')
        # taskDeadline=request.POST.get('add_dateDeadline')
        # print(taskDeadline)
        task.objects.create(task=taskItem, taskCompleted = False)
    return redirect("home")
def deleteTask(request, task_id):
    delete_object = task.objects.get(id=task_id)
    delete_object.delete()
    return redirect('home')
def completedTask(request, task_id):
    task_completed =task.objects.get(id=task_id)
    if task_completed.taskCompleted == False:
        task_completed.taskCompleted= True
        task_completed.save()
    elif task_completed.taskCompleted== True:
        task_completed.taskCompleted= False
        task_completed.save()
    return redirect('home')
def editedTask(request, task_id):
    task_edited= task.objects.get(id=task_id)
    if request.method== 'POST':
        name= request.POST.get('edit_todo')

        task_edited.task= name
        task_edited.save()   
    return redirect('home') 

# def get_active_tasks(request):

#     if request.GET.get('filter') == 'true':
#         return task.objects.filter(taskCompleted=False)
#     return redirect('home')

# def get_completed_task(request):
#     if request.GET.get('filter') == 'true':
#         return task.objects.filter(taskCompleted=True)
#     return redirect('home')



# def activeFilter(request):

#     completeTasks = get_active_tasks(request)
#     return render(request, 'active.html', {'completeTasks': completeTasks})



# Create your views here.
