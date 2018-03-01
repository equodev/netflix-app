package main.app;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

import com.make.equo.application.api.IEquoFramework;
import com.make.equo.application.client.api.Equo;
import com.make.equo.application.model.EquoApplication;

import io.netty.handler.codec.http.QueryStringDecoder;

public class NetflixApplication implements IEquoFramework {

	private String currentProfileId = null;

	@Override
	public EquoApplication buildApp(EquoApplication application) {
		try {
			application
				.name("Netflix")
				.withSingleView("http://www.netflix.com")
				.enableOfflineSupport()
				.addOfflineSupportFilter((request) -> {
					String uri = request.getUri();
					if (uri.contains("preflight")) {
						QueryStringDecoder decoder = new QueryStringDecoder(uri);
						request.setUri(decoder.path() +  "?=" +  currentProfileId);
					}
					return request;
				})
				.addOfflineSupportFilter((request) -> {
					String uri = request.getUri();
					if (uri.contains("profiles/switch")) {
						QueryStringDecoder decoder = new QueryStringDecoder(uri);
						Map<String, List<String>> parameters = decoder.parameters();
						String switchProfileGuid = parameters.get("switchProfileGuid").get(0);
						currentProfileId = switchProfileGuid;
						request.setUri(decoder.path() + "?=" + currentProfileId);
					}
					return request;
				})
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
				
				// Add main menues, menues, and menues items
				.withMainMenu("File")
					.addMenuItem("New Playlist").onClick(() -> {
						System.out.println("New Playlist Window...");
					})
					.addShortcut("M1+N")
					.addMenuSeparator()
					.addMenu("Import Playlist")
						.addMenuItem("iTunes")
						.onBeforeExit("Exit", () -> {
							System.out.println("It's fine to have this method, not required though. However, the addExitMenuItem"
									+ " method has no effect in OSx systems, since an Exit menu is already in place.");
						})
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
