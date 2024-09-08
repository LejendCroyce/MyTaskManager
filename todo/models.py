from django.db import models
class user(models.Model):
    firstName= models.CharField(max_length=200)
    lastName= models.CharField(max_length=200)
    email=models.EmailField(null=True,blank=200)
    date=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.firstName} - {self.lastName} - {self.email} - {self.date}"
    
class task(models.Model):

    task= models.CharField(max_length=500)
    taskCompleted=models.BooleanField(default=False)
    # deadline=models.DateField()
    dateCreated= models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.task} - {self.taskCompleted} - {self.dateCreated}"
# Create your models here.
