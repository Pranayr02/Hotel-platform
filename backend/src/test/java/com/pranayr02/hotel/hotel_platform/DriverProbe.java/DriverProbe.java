public class DriverProbe {
    public static void main(String[] args) throws Exception {
        Class.forName("org.postgresql.Driver");  // just try to load it
        System.out.println("✅  Driver found!");
    }
}
