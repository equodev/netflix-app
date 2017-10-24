package main.app;

import com.make.equo.application.api.IEquoFramework;
import com.make.equo.application.client.api.Equo;
import com.make.equo.application.model.EquoApplication;
import com.make.equo.application.model.MenuItemBuilder;
import com.make.equo.application.model.OptionalFieldBuilder;

public class NetflixApplication implements IEquoFramework {

	@Override
	public EquoApplication buildApp(EquoApplication application) {
		OptionalFieldBuilder mainView = application
				.name("Netflix")
				.withSingleView("https://www.netflix.com")
				.addShortcut("M1+I", () -> {
					System.out.println("This is a nice global shortcut!");
				})
				.addShortcut("M1+V", () -> {
					System.out.println("Another nice global shortcut!");
				});
		
		MenuItemBuilder menuItemBuilder = mainView
				.withMainMenu("File")
					.addMenuItem("New Playlist").onClick(() -> {
						System.out.println("New Playlist Window...");
					})
					.addShorcut("M1+N")
					.addMenuSeparator()
					.addMenu("Import Playlist")
						.addMenuItem("iTunes");
		
		mainView.withMainMenu("View")
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
					});
		return menuItemBuilder
				.withMainMenu("Playback")
					.addMenuItem("Play")
					.addMenuSeparator()
					.addMenuItem("Next")
					.addMenuItem("Previous")
					.addMenuItem("Seek Forward")
					.addMenuItem("Seek Backward")
					.addMenuSeparator()
					.addMenuItem("Volume Up")
					.addMenuItem("Volume Down")
					.start();
	}
	
	public static void main(String[] args) {
		Equo.start(NetflixApplication.class);
	}
}
