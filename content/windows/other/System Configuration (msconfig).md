---
icon: TiArticle
---
The **System Configuration** utility (`MSConfig`) is for advanced troubleshooting, and its main purpose is to help diagnose startup issues.

![[msconfig1.png]]

The utility has five tabs across the top. Below are the names for each tab. We will briefly cover each tab in this task. 

1. General
2. Boot
3. Services
4. Startup
5. Tools

In the **General** tab, we can select what devices and services for Windows to load upon boot. The options are: **Normal**, **Diagnostic**, or **Selective**.

![[msconfig2.png]]

In the **Boot** tab, we can define various boot options for the Operating System.

![[msconfig3.png]]

The **Services** tab lists all services configured for the system regardless of their state (running or stopped). A service is a special type of application that runs in the background.

![[msconfig5.png]]

There is a list of various utilities (tools) in the Tools tab that we can run to configure the operating system further. There is a brief description of each tool to provide some insight into what the tool is for.

<mark style="background: #FFB86CA6;">Notice the **Selected command** section. The information in this textbox will change per tool.</mark>

For example, if you run `winver.exe` using RUN then you'd be running the `About Windows` tool.