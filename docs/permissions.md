# Permissions

Often times, users of an application only have a certain set of functions that they can use. This set depends on the user's permissions. This means that one user can perform operations A, B, and C, while another user can only perform operation B, because they have no authority to perform operations A and C.

In this part you will learn:

* How to add users
* How to add access groups
* How to assign permissions
* What permissions there are and what they are for

## How to add users

First of all, before you learn how to assign permissions, you need to know how to add users. This instruction explains step-by-step how to add them to Dataplane.

1. In order to add a new user, go to the **Team** page:

![Permissions](/img/permissions/01.png)

2. Click on the **Add** button. You will be prompted a side menu on the right side of your screen:

![Permissions](/img/permissions/02.png)

3. Fill in mandatory fields:

* First name
* Last name
* Email
* Password

If you wish, you can also specify:

* Job title
* Timezone

4. Having the fields filled in, click on the **Save** button:

![Permissions](/img/permissions/03.png)

A success message should be displayed unless the user has already existed in the system. If you have failed to add a user, please try to use a different email.

5. User will appear on the list in the **Team** page:

![Permissions](/img/permissions/04.png)

Well done! You have sucessfully added a new user.


## How to add access groups

Access groups are groups of users who share access permissions. Some users may have the same permissions, so to avoid assigning everyone their own permissions, we can create one access group, give it a set of permissions and connect a certain group of users to it. As a result, we don't need to assign permissions to a user - we can assign them to a specific access group that has all necessary permissions already set.

The instruction below explains how to add access groups to Dataplane.

1. Please go to the **Access Groups** page:

![Permissions](/img/permissions/05.png)

2. Click on the **Add** button. You will be prompted a side menu on the right side of your screen:

![Permissions](/img/permissions/06.png)

3. Give your access group a name (description is optional) and click on the **Save** button:

![Permissions](/img/permissions/07.png)

4. If nothing fails, you will receive information about success and your new access group will appear on the list:

![Permissions](/img/permissions/08.png)

Congratulations! You have sucessfully added a new access group.


## How to assign permissions

As we have stated it before, we can assign permisions to:

* A user
* Access groups

Let's start with assigning permissions to a user.

1. Go to the **Team** page and click on a user:

![Permissions](/img/permissions/09.png)

2. Here you will find all the details about the user and you can assign them permissions:

![Permissions](/img/permissions/10.png)

> In the **Belongs to environments** and **Belongs to access groups** sections you can specify which environments (e.g. Development, Production) and which access groups the user belongs to.
3. In the **Permissions** section select from the dropdown list which permissions you would like to assign to the user:

![Permissions](/img/permissions/11.png)

Just select a permission and confirm by clicking on the **Add** button:

![Permissions](/img/permissions/12.png)

4. The permission will promptly appear below the dropdown, in its inherent section:

![Permissions](/img/permissions/13.png)

You can add multiple permissions.

Now let's look at assigning permissions to access groups.

5. Go to the **Access Groups** page and click on an access group:

![Permissions](/img/permissions/14.png)

6. Here you will find all the details about the access group:

![Permissions](/img/permissions/15.png)

> In the **Members** section you can add users that will belong to this access group.
7. Like before, in the **Permissions** section you can select which permissions this access group will have:

![Permissions](/img/permissions/16.png)

Just select a permission and confirm by clicking on the **Add** button. The permission will promptly appear below the dropdown, in its inherent section:

![Permissions](/img/permissions/17.png)


## What permissions there are and what they are for

The table below shows what permissions are there exactly in Dataplane and what each of them means.

| Permission Name | Description |
| ----------- | ----------- |
| Admin | It gives you system administrator rights for all environments |
| Manage environments | It allows you to make changes to environments | 
| Environment admin | It gives you system administrator rights for a selected environment | 
| Remove user from environment | It allows you to remove a user from a selected environment | 
| Manage professions| It allows you to make changes to professions | 
| View all pipelines | It allows you to see all pipelines of each user | 
| Edit all pipelines | It allows you to make changes to all pipelines | 
| Run all pipelines | It allows you to run all pipelines | 
| Create pipelines | It allows you to create a pipeline | 
| Manage pipeline permissions | It allows you to make changes to permissions of a pipeline | 
| Manage secrets | It allows you to manage secrets | 
| Manage workers | It allows you to manage workers | 
| View workers | It allows you to view all workers | 
| Deploy pipelines to this environment | It allows you to deploy pipelines only to a selected environment | 
| Deploy pipelines from this environment | It allows you to deploy pipelines from a selected environment  | 
| View all deployments | It allows you view all deployments  | 
| Add user to environment | It allows you add a user only to a selected environment  |