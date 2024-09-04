
namespace InverterStringApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Digite uma string para inverter: ");
            string original = Console.ReadLine();

            string invertida = InverterString(original);

            Console.WriteLine("String original: " + original);
            Console.WriteLine("String invertida: " + invertida);
        }

        static string InverterString(string str)
        {
            char[] caracteres = str.ToCharArray();

            int inicio = 0;
            int fim = caracteres.Length - 1;

            while (inicio < fim)
            {
                char temp = caracteres[inicio];
                caracteres[inicio] = caracteres[fim];
                caracteres[fim] = temp;

                inicio++;
                fim--;
            }

            return new string(caracteres);
        }
    }
}

