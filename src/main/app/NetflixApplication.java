package main.app;

import java.io.IOException;
import java.net.URISyntaxException;

import com.make.equo.application.api.IEquoFramework;
import com.make.equo.application.client.api.Equo;
import com.make.equo.application.model.EquoApplication;

public class NetflixApplication implements IEquoFramework {

	@Override
	public EquoApplication buildApp(EquoApplication application) {
		try {
			application
				.name("Netflix")
				.withSingleView("https://www.netflix.com")
				
				// Add custom scripts to modify the Web application
				.addCustomScript("https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js")
				.addCustomScript("imdb.js")
				.addCustomScript("actions.js")
				
				// Add global Shorcuts
				.addShortcut("M1+I", () -> {
						System.out.println("This is a nice global shortcut!");
					})
				.addShortcut("M1+K", () -> {
					System.out.println("This is a nice global shortcut!");
				}, "userEventShortcutWithRunnable")
				.addShortcut("M1+V", "userEventShortcut")
				.onExit(() -> {
					System.out.println("It's fine to have this method, not required though. However, the addExitMenuItem"
							+ " method has no effect in OSx systems, since an Exit menu is already in place.");
				})
				
				// Add main menues, menues, and menues items
				.withMainMenu("File")
					.addMenuItem("New Playlist").onClick(() -> {
						System.out.println("New Playlist Window...");
					})
					.addShortcut("M1+N")
					.addMenuSeparator()
					.addMenu("Import Playlist")
						.addMenuItem("iTunes")

				.withMainMenu("View")
					.addMenuItem("Right Sidebar")
					.addMenuSeparator()
					.addMenuItem("Actual Size")
					.addMenuItem("Zoom In")
					.addMenuItem("Zoom Out")
					.addMenuSeparator()
					.addMenuItem("Go Back")
					.addMenuItem("Go Forward")
					.addMenuSeparator()
					.addMenuItem("Enter Full Screen")
					.onClick(() -> {
						System.out.println("Hello Netflix world!");
					})
				.withMainMenu("Playback")
					.addMenuItem("Play")
					.onClick(() -> {
						System.out.println("Playing selected movie...");
					}, "playSelectedVideo")
//					.onClick("playSelectedVideo")
					.addShortcut("SPACE")
					.addMenuSeparator()
					.addMenuItem("Next")
					.addMenuItem("Previous")
					.addMenuItem("Seek Forward")
					.addMenuItem("Seek Backward")
					.addMenuSeparator()
					.addMenuItem("Volume Up")
					.addMenuItem("Volume Down")
					.start();
			} catch (IOException | URISyntaxException e) {
				e.printStackTrace();
			}
		return null;
	}
	
	public static void main(String[] args) {
		Equo.start(NetflixApplication.class);
	}
}
