package main.app;

import com.make.equo.application.api.IEquoFramework;
import com.make.equo.application.client.api.Equo;
import com.make.equo.application.model.EquoApplication;

public class NetflixApplication implements IEquoFramework {

	@Override
	public EquoApplication buildApp(EquoApplication application) {
		return application
				.name("Netflix")
				.withSingleView("netflix.com")
				.withMainMenu("File")
					.addMenuItem("New Playlist").onClick(() -> {
						System.out.println("New Playlist Window...");
					})
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
					.addMenuSeparator()
					.addMenuItem("Enter Full Screen")
						.addMenuItem("Otro item").onClick(() -> {
							System.out.println("Hola Netflix world 2!");
						})
					.start();
	}
	
	public static void main(String[] args) {
		Equo.start(NetflixApplication.class);
	}
}
