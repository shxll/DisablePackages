Intent intent = new Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
Uri uri = Uri.fromParts("package", "com.google.android.gms", null);
intent.setData(uri);
startActivity(intent);