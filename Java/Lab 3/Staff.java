public abstract class Staff {
    protected String name;
    protected String email;
    protected double hours;

    protected Staff(String n, String e, double h){
        name = n;
        email = e;
        hours = h;
    }

    public void setName(String n){
        name = n;
    }

    public void setEmail(String e){
        email = e;
    }

    public void setHours(double hour){
        hours = hour;
    }

    public String getName(){ return name; }

    public String getEmail(){ return email; }

    public double gethours(){ return hours; }


}
