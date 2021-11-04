export abstract class Serializable {
  public abstract serialize(): Record<string, unknown>
}
