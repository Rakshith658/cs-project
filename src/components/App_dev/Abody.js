import React from 'react'

export const Android = () => {
   return(
       <div className="Amain" style={{padding:30}}>
           <p>
               <h3>
                   Android software development is the process by which applications are created for devices running the Android operating system. 
                   Google states that "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible. 
                   All non-JVM languages, such as Go, JavaScript, C, C++ or assembly, need the help of JVM language code, that may be supplied by tools, likely with restricted API support. 
                   Some programming languages and tools allow cross-platform app support (i.e. for both Android and iOS). 
                   Third party tools, development environments, and language support have also continued to evolve and expand since the initial SDK was released in 2008. 
                   The official Android app distribution mechanism to end users is Google Play; it also allows staged gradual app release, as well as distribution of pre-release app versions to testers.
               </h3>
           </p>
       </div>
   ) 
};

export const IOS = () => {
   return(
       <div className="Imain" style={{padding:30}}>
           <p>
               <h3 style={{marginBottom:10}}>
                   iOS devices come with preinstalled apps developed by Apple including Mail, Maps, TV, Music, FaceTime, Wallet, Health, and many more.
                </h3>
            <p>
            </p>
                <h3>
                    Applications ("apps") are the most general form of application software that can be installed on iOS. 
                    They are downloaded from the official catalog of the App Store digital store, where apps are subjected to security checks before being made available to users. 
                    In June 2017, Apple updated its guidelines to specify that app developers will no longer have the ability to use custom prompts for encouraging users to leave reviews for their apps. 
                    IOS applications can also be installed directly from an IPA file provided by the software distributor, via unofficial ways. 
                    They are written using iOS Software Development Kit (SDK) and, often, combined with Xcode, using officially supported programming languages, including Swift and Objective-C. 
                    Other companies have also created tools that allow for the development of native iOS apps using their respective programming languages.
               </h3>
           </p>
       </div>
   ) 
};

export const Crossplatform = () => {
   return(
       <div className="Cmain">
           <p>
               <h3 style={{marginTop:15}}>
                   Cross-platform mobile development is the creation of software applications that are compatible with multiple mobile operating systems.
               </h3>
           </p>
           <h2 style={{marginTop:20}}>There are two types of cross-platform mobile applications:</h2>
           <p style={{marginTop:10}}>
               <h4 >
                   Native cross-platform apps. Each operating system has its SDK and technology stack: 
                   Java or Kotlin for Android and Objective-C or Swift for iOS apps. Cross-platform app developers create a unified API running on top of a native SDK, make use of native IDEs, and build iOS and Android apps that share the same codebase. 
                   Native cross-platform applications are primarily built with Xamarin, React Native, and Kotlin Multiplatform.
               </h4>
           </p>
           <p style={{marginTop:10}}>
               <h4>
                   Hybrid applications. Although mobile apps are designed for smartphones and tablets, it is the back-end layer that handles their business logic. 
                   Since both iOS and Android SDKs feature advanced web components, it is possible to create parts of an application graphical user interface (GUI) with HTML5, CSS, and JavaScript. 
                   Next, developers wrap the code in WebView — a browser bundled inside of a mobile app, which renders the contents as a good old website. 
                   Some hybrid apps even interact with a smartphone’s hardware, although the functionality can be limited. 
               </h4>
           </p>
       </div>
   ) 
};

