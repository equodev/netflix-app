package main.app;

import com.make.equo.application.client.api.EquoApplication;

public class EquoEntryPoint {

	public static void main(String[] args) {
		try {
			EquoApplication
				.name("Netflix")
				.withSingleView("netflix.com")
				.start();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
	}
	
}
