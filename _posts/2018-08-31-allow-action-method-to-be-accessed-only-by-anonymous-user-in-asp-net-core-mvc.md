---
id: 5
slug: allow-action-method-to-be-accessed-only-by-anonymous-user-in-asp-net-core-mvc
published: true
title: Allow action method to be accessed only by anonymous user in Asp.Net Core MVC
date: '2018-08-31 15:36:05 +0530'
date_gmt: '2018-08-31 15:36:05 +0530'
image: '/05/featured.jpg'
category: Asp.Net Core
tags:
  - Asp.Net Core
  - Asp.Net Core 2.1
  - Asp.Net Core 2.2
---

<p><!-- wp:paragraph --></p>
<p>In this tutorial let's see how to allow a controller/action method to be accessed only by an anonymous user in Asp.Net Core MVC project.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>In every project we globally restrict the application to access only authenticated users. But where ever requires <code>[AllowAnonymous]</code> attribute is used to allow anonymous access. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>In some scenario page should be accessed only to anonymous users and logged in users should not. In this case Asp.Net Core has no built in filter, so we are going to implement the custom filter attribute to do the magic.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>First create a class file <code>AnonymousOnlyFilter.cs</code> </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>public class AnonymousOnlyFilter : ActionFilterAttribute
{
    public override void OnActionExecuting(ActionExecutingContext context)
    {
        if (context.HttpContext.User.Identity.IsAuthenticated)
        {
            context.Result = new RedirectToActionResult("Index", "Home","");
        }
    }
}</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>In this class we are deriving <code>ActionFilterAttribute</code> class and overriding <code>OnActionExecuting</code> method to check if the user is authenticated.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>If user is authenticated, that request will be redirected to the Home page.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>To see the filter in action, use the filter attribute to a Controller or an Action method.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    &#91;AnonymousOnlyFilter]
    public IActionResult About()
    {
        ViewData&#91;"Message"] = "Your application description page.";
        return View();
    }

    &#91;AnonymousOnlyFilter]
    public IActionResult Contact()
    {
        ViewData&#91;"Message"] = "Your contact page.";
        return View();
    }

    &#91;AnonymousOnlyFilter]
    public IActionResult Privacy()
    {
        return View();
    }

}</code></pre>

<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Hope this guide is helpful for you.</p>
<p><!-- /wp:paragraph --></p>
